import Link from "next/link";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.25 10h11.5m-5-5 5 5-5 5" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
      <path d="m16 3 2.85 9.15L28 15l-9.15 2.85L16 27l-2.85-9.15L4 15l9.15-2.85L16 3Z" />
      <path d="m25 21 .95 3.05L29 25l-3.05.95L25 29l-.95-3.05L21 25l3.05-.95L25 21Z" />
    </svg>
  );
}

function PracticeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="7" width="22" height="17" rx="5" />
      <path d="m12 28 4-4 4 4M12 15h.01M20 15h.01M12 19h8" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
      <path d="M5 26V6m0 20h22M10 21l6-6 4 3 7-9" />
      <path d="M21 9h6v6" />
    </svg>
  );
}

const features = [
  {
    number: "01",
    icon: <PracticeIcon />,
    title: "Practice out loud",
    description:
      "Get comfortable thinking on your feet with realistic, voice-led mock interviews tailored to your role.",
    label: "Realistic mock interviews",
  },
  {
    number: "02",
    icon: <SparkIcon />,
    title: "Know what to improve",
    description:
      "Get clear, thoughtful feedback on your answers, communication, and the details that make you stand out.",
    label: "Feedback that moves you forward",
  },
  {
    number: "03",
    icon: <GrowthIcon />,
    title: "See your progress",
    description:
      "Turn every practice session into a plan, so you can focus on your next step instead of guessing.",
    label: "A plan built around you",
  },
];

export default function Home() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <nav className="navigation page-width" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Intervexa home">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>intervexa</span>
          </Link>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
          </div>

          <div className="nav-actions">
            <Link className="login-link" href="/login">
              Log in
            </Link>
            <Link className="button button-small button-dark" href="/register">
              Get started <ArrowIcon />
            </Link>
          </div>
        </nav>
      </header>

      <section className="hero page-width">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-icon">
              <SparkIcon />
            </span>
            Your next opportunity starts here
          </div>
          <h1>
            Make your next
            <br />
            interview <span className="headline-accent">your best.</span>
          </h1>
          <p className="hero-description">
            The confidence to show what you know comes from practice. Meet your
            personal AI interview coach and make every answer count.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/register">
              Start practicing <ArrowIcon />
            </Link>
            <a className="text-link" href="#how-it-works">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>J</span>
              <span>M</span>
              <span>A</span>
              <span className="avatar-plus">+</span>
            </div>
            <p>
              A little practice.
              <br />
              <strong>A lot more confidence.</strong>
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Preview of an AI interview session">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="session-card">
            <div className="session-topbar">
              <div className="session-brand">
                <span className="session-brand-mark">i.</span>
                <span>Practice room</span>
              </div>
              <span className="live-pill">
                <span /> LIVE SESSION
              </span>
            </div>

            <div className="session-body">
              <div className="interviewer">
                <div className="interviewer-avatar" aria-hidden="true">
                  <span className="avatar-halo" />
                  <span className="avatar-face">A</span>
                </div>
                <div className="interviewer-caption">
                  <span>Your interviewer</span>
                  <strong>Alex Morgan</strong>
                </div>
                <button className="more-button" type="button" aria-label="More session options">
                  ···
                </button>
              </div>

              <div className="question-card">
                <span className="question-label">BEHAVIORAL · 02:14</span>
                <p>
                  “Tell me about a time you solved a challenging problem with
                  your team.”
                </p>
              </div>

              <div className="response-card">
                <div className="response-meta">
                  <span className="response-dot" />
                  <span>Your response</span>
                  <span className="response-time">00:38</span>
                </div>
                <div className="waveform" aria-hidden="true">
                  {Array.from({ length: 48 }, (_, index) => (
                    <span
                      key={index}
                      style={{ height: `${12 + ((index * 17 + 11) % 32)}px` }}
                    />
                  ))}
                </div>
                <div className="response-controls">
                  <span className="pause-button" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                  <div className="audio-track">
                    <span />
                  </div>
                  <span>00:38</span>
                </div>
              </div>

              <div className="session-footer">
                <span className="secure-note">
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                    <path d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2m-8 0h9v7h-9V7Z" />
                  </svg>
                  Just you and your coach
                </span>
                <span className="finish-button">Finish session <ArrowIcon /></span>
              </div>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-icon">
              <SparkIcon />
            </div>
            <div>
              <span>Nice work!</span>
              <strong>Strong, clear example</strong>
            </div>
            <span className="insight-check" aria-label="Positive feedback">✓</span>
          </div>

          <div className="session-count">
            <span className="count-stars" aria-hidden="true">✳</span>
            <span><strong>One question</strong> closer to ready</span>
          </div>
        </div>
      </section>

      <section className="role-strip page-width" aria-label="Interview types">
        <span className="strip-label">Practice for what’s next</span>
        <div className="role-list">
          <span>Software engineering</span>
          <i />
          <span>Product &amp; design</span>
          <i />
          <span>Business &amp; beyond</span>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <span className="section-kicker">A better kind of prep</span>
              <h2>
                Less second-guessing.
                <br />
                <span>More you at your best.</span>
              </h2>
            </div>
            <p>
              Great interviews aren’t about having every answer. They’re about
              feeling ready to find yours.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-label">
                  <span /> {feature.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="page-width steps-inner">
          <div className="steps-intro">
            <span className="section-kicker">Simple by design</span>
            <h2>Ready is a feeling you can build.</h2>
            <p>
              Start wherever you are. We’ll help you take it from there.
            </p>
            <Link className="button button-light" href="/register">
              Meet your coach <ArrowIcon />
            </Link>
          </div>
          <div className="steps-list">
            <div className="step">
              <span className="step-number">01</span>
              <div>
                <h3>Choose your direction</h3>
                <p>Tell us the role you’re working toward.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <div>
                <h3>Have a real conversation</h3>
                <p>Practice answering questions, your way.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <div>
                <h3>Leave with a clear next step</h3>
                <p>Use your feedback to keep getting better.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer page-width">
        <Link className="brand footer-brand" href="/" aria-label="Intervexa home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>intervexa</span>
        </Link>
        <p>Show up as yourself. We’ll help you feel ready.</p>
        <span className="copyright">© 2026 Intervexa</span>
      </footer>
    </main>
  );
}
