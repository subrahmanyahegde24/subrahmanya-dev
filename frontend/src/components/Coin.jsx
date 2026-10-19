// Rotating medallion with circular text around an "SH" monogram.
export default function Coin({ className = '' }) {
  return (
    <div className={`relative h-24 w-24 ${className}`} data-hover>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin-slow_18s_linear_infinite]">
        <defs>
          <path id="coin-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          <linearGradient id="coin-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: 'rgb(var(--a100))' }} />
            <stop offset=".5" style={{ stopColor: 'rgb(var(--a400))' }} />
            <stop offset="1" style={{ stopColor: 'rgb(var(--a700))' }} />
          </linearGradient>
        </defs>
        <text style={{ fill: 'rgb(var(--a400))' }} fontSize="8.4" fontFamily="Montserrat" fontWeight="600" letterSpacing="2.6">
          <textPath href="#coin-circle">AI ENGINEER • AGENTIC AI • EDGE LLMS •</textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] flex items-center justify-center rounded-full border border-accent-400/60 bg-gradient-to-br from-[#1e2129] via-[#0e1015] to-[#1e2129] shadow-[0_0_30px_rgb(var(--a400)/0.35),inset_0_0_12px_rgb(var(--a400)/0.25)]">
        <span className="font-display text-2xl text-accent">SH</span>
      </div>
    </div>
  );
}
