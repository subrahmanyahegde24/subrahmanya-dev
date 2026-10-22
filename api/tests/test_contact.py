from fastapi.testclient import TestClient
from api.index import app

client = TestClient(app)


def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"


def test_contact_sends_email(monkeypatch):
    sent = {}

    async def fake_send(data):
        sent.update(data)
        return True

    monkeypatch.delenv("MONGO_URI", raising=False)
    monkeypatch.delenv("MONGODB_URI", raising=False)
    monkeypatch.setattr("api.routers.contact.send_notification", fake_send)
    response = client.post("/api/contact", json={"name": "A", "email": "a@example.com", "message": "Hi"})
    assert response.status_code == 200
    assert response.json()["success"] is True
    assert sent["email"] == "a@example.com"


def test_contact_email_failure_returns_502(monkeypatch):
    async def fake_send(data):
        raise RuntimeError("boom")

    monkeypatch.delenv("MONGO_URI", raising=False)
    monkeypatch.delenv("MONGODB_URI", raising=False)
    monkeypatch.setattr("api.routers.contact.send_notification", fake_send)
    response = client.post("/api/contact", json={"name": "A", "email": "a@example.com", "message": "Hi"})
    assert response.status_code == 502


def test_contact_rejects_invalid_email():
    response = client.post("/api/contact", json={"name": "A", "email": "nope", "message": "Hi"})
    assert response.status_code == 422
