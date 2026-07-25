const modules = [
  {
    week: "01",
    title: "System boundaries",
    detail: "Map services, data ownership, and failure domains before you write a line.",
  },
  {
    week: "02",
    title: "Contracts that hold",
    detail: "APIs, schemas, and versioning strategies that survive real traffic.",
  },
  {
    week: "03",
    title: "Ship with confidence",
    detail: "CI, staged rollouts, and observability wired in from day one.",
  },
  {
    week: "04",
    title: "Operate under load",
    detail: "Incident response, capacity thinking, and postmortems that improve the system.",
  },
];

const outcomes = [
  {
    label: "Architecture",
    text: "Design services you can explain on a whiteboard and defend in review.",
  },
  {
    label: "Delivery",
    text: "Move from feature branch to production with a repeatable path.",
  },
  {
    label: "Ownership",
    text: "Own the runtime: metrics, alerts, and the decisions they force.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-paper text-ink">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
          >
            Real Engineering
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft sm:flex">
            <a
              href="#curriculum"
              className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
            >
              Curriculum
            </a>
            <a
              href="#outcomes"
              className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
            >
              Outcomes
            </a>
            <a
              href="#enroll"
              className="text-signal transition-colors hover:text-signal-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
            >
              Enroll
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero — one composition: brand, headline, line, CTA, full-bleed blueprint */}
        <section className="blueprint-grid relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(46,123,196,0.18),transparent_55%),linear-gradient(to_bottom,transparent_40%,var(--paper)_92%)]"
            aria-hidden
          />

          {/* Dominant visual: oversized schematic frame */}
          <div
            className="pointer-events-none absolute right-[-8%] top-[12%] hidden h-[70%] w-[52%] border border-blueprint/25 md:block"
            aria-hidden
          >
            <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-blueprint/60">
              dwg · cohort-29
            </div>
            <svg
              className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] text-blueprint/40"
              viewBox="0 0 400 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="40" y="60" width="140" height="90" stroke="currentColor" strokeWidth="1.5" />
              <rect x="220" y="60" width="140" height="90" stroke="currentColor" strokeWidth="1.5" />
              <rect x="40" y="220" width="320" height="120" stroke="currentColor" strokeWidth="1.5" />
              <path d="M110 150v70M290 150v70M200 220v0" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="110" cy="185" r="4" fill="currentColor" className="animate-pulse-dot" />
              <circle cx="290" cy="185" r="4" fill="currentColor" />
              <path
                d="M60 280h80M60 300h120M60 320h60"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M220 280h100M220 300h80M220 320h110"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <text
                x="48"
                y="52"
                className="fill-current font-mono text-[11px] uppercase tracking-widest"
              >
                ingress
              </text>
              <text
                x="228"
                y="52"
                className="fill-current font-mono text-[11px] uppercase tracking-widest"
              >
                workers
              </text>
              <text
                x="48"
                y="212"
                className="fill-current font-mono text-[11px] uppercase tracking-widest"
              >
                data plane
              </text>
            </svg>
            <div className="absolute bottom-4 right-4 h-3 w-3 border border-blueprint/50" />
            <div className="absolute bottom-4 left-4 h-3 w-3 border border-blueprint/50" />
            <div className="absolute right-4 top-4 h-3 w-3 border border-blueprint/50" />
            <div className="absolute left-4 top-[calc(1rem+1.25rem)] h-3 w-3 border border-blueprint/50" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
            <p className="animate-fade-up font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              Real Engineering
            </p>
            <div className="animate-draw-line mt-5 h-px w-24 bg-signal md:w-32" />
            <h1 className="animate-fade-up-delay-1 mt-6 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl">
              Build systems that survive contact with production.
            </h1>
            <p className="animate-fade-up-delay-2 mt-4 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              A four-week course on architecture, delivery, and operations—taught with the same rigor you bring to a design review.
            </p>
            <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <a
                id="enroll"
                href="#curriculum"
                className="inline-flex h-12 items-center justify-center bg-signal px-7 text-sm font-semibold text-white transition-colors hover:bg-signal-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
              >
                View the syllabus
              </a>
              <a
                href="#outcomes"
                className="inline-flex h-12 items-center justify-center border border-ink/20 bg-white/60 px-7 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
              >
                What you&apos;ll walk away with
              </a>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-blueprint">
                Curriculum
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Four weeks. One production mindset.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                Each week closes with a working artifact—diagrams, deployable services, and runbooks you can take back to your team.
              </p>
            </div>

            <ol className="mt-14 divide-y divide-line border-y border-line">
              {modules.map((mod) => (
                <li
                  key={mod.week}
                  className="group grid gap-4 py-8 transition-colors hover:bg-paper/80 sm:grid-cols-[5rem_1fr] sm:gap-10 md:grid-cols-[6rem_minmax(0,14rem)_1fr] md:items-baseline"
                >
                  <span className="font-mono text-sm text-blueprint">
                    Wk {mod.week}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {mod.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-soft sm:col-span-2 md:col-span-1">
                    {mod.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section id="outcomes" className="border-t border-line bg-paper-deep">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-blueprint">
                Outcomes
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Leave with judgment, not just slides.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                The course is built for mid-level engineers ready to own a service end to end.
              </p>
            </div>

            <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {outcomes.map((item) => (
                <li key={item.label} className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-16 flex flex-col items-start gap-4 border border-blueprint/30 bg-white px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-semibold text-ink">
                  Next cohort opens soon
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  Limited seats. Live critiques each week.
                </p>
              </div>
              <a
                href="mailto:hello@realengineering.dev?subject=Cohort%20enrollment"
                className="inline-flex h-12 shrink-0 items-center justify-center bg-ink px-7 text-sm font-semibold text-white transition-colors hover:bg-blueprint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
              >
                Request a seat
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p className="font-display text-base font-semibold">
            Real Engineering
          </p>
          <p className="font-mono text-xs text-white/55">
            Cohort 29 · Build · Ship · Operate
          </p>
        </div>
      </footer>
    </div>
  );
}
