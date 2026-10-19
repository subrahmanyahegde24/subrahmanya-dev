import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDownTray } from 'react-icons/hi2';
import { FaXTwitter } from 'react-icons/fa6';
import PageTransition from '../components/layout/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import TerminalText from '../components/ui/TerminalText';
import PromptHacker from '../components/ai/PromptHacker';
import { personalInfo } from '../data/resume';

const terminalLines = [
  { text: 'whoami', prefix: '$', type: 'prompt', delay: 300 },
  { text: 'Subrahmanya Shivaram Hegde', type: 'output', delay: 200 },
  { text: 'role --current', prefix: '$', type: 'prompt', delay: 300 },
  { text: 'Associate AI Engineer @ Openecore', type: 'output', delay: 200 },
  { text: 'location', prefix: '$', type: 'prompt', delay: 300 },
  { text: 'Bengaluru, Karnataka, India', type: 'output', delay: 200 },
  { text: 'cat passion.txt', prefix: '$', type: 'prompt', delay: 300 },
  { text: 'Building production RAG systems, multi-agent LLM apps, and edge AI pipelines.', type: 'output', delay: 200 },
  { text: 'echo $STATUS', prefix: '$', type: 'prompt', delay: 300 },
  { text: '🟢 Open to opportunities in Agentic AI, RAG & Edge LLMs', type: 'success', delay: 100 },
];

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/Subrahmanya07', label: 'X / Twitter' },
];

export default function About() {
  return (
    <PageTransition>
      <div className="section-container pt-28">
        <SectionHeading
          title="About Me"
          subtitle="AI engineer building agentic, retrieval-augmented, and edge AI systems."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Terminal + Photo */}
          <div className="space-y-8">
            <TerminalText lines={terminalLines} speed={30} />

            {/* Profile photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-48 h-48 mx-auto"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-indigo via-accent-cyan to-accent-purple p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-dark light:bg-light overflow-hidden flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Subrahmanya Shivaram Hegde"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML =
                        '<span class="font-display text-4xl font-bold text-gradient">SSH</span>';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 light:text-slate-700 leading-relaxed text-justify">
              <p>
                I'm <strong className="text-white light:text-slate-900">Subrahmanya Shivaram Hegde</strong>,
                an Associate AI Engineer at <strong className="text-accent-indigo">Openecore</strong> (formerly
                Kruthak Technology) in Bengaluru, with 1+ year of industry experience building production
                RAG systems, multi-agent LLM applications, and edge AI pipelines.
              </p>
              <p>
                I work across the full delivery lifecycle: designing microservice backends with FastAPI,
                optimising local LLMs for low-spec devices, and shipping containerised workloads to GCP
                through CI/CD. Right now I'm building a self-hosted, on-premise restaurant ordering
                platform — tablet ordering, a real-time Kitchen Display System, and an admin console —
                designed to feed a recommendation engine.
              </p>
              <p>
                Before that, as a Junior Edge AI Engineer at Kruthak, I split a monolith into
                microservices (~30% faster inter-service responses), engineered Agentic RAG workflows
                for LexiGuid, quantised Gemma models via Ollama (~40% lower latency), and cut deployment
                time from ~45 to ~8 minutes with GitHub Actions and Cloud Run. I also built vision
                pipelines for COFRO, a coffee ripeness detector running on the Hailo-8L edge accelerator.
              </p>
              <p>
                I hold a B.E. in Artificial Intelligence & Machine Learning from Vivekananda College of
                Engineering & Technology (CGPA: 8.83/10), and my agricultural AI project KALPA was
                awarded ₹1,00,000 in seed funding under PROJECT CODE UNNATI.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 light:text-slate-700 hover:text-accent-cyan hover:glow-border transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="Subrahmanya_Hegde_Resume.pdf"
              className="inline-flex items-center gap-2 btn-primary mt-2"
            >
              <HiArrowDownTray className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Prompt Hacker Mini-Game */}
        <div className="mt-20">
          <PromptHacker />
        </div>
      </div>
    </PageTransition>
  );
}
