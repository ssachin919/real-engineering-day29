import Link from "next/link";
import CourseEnquiryForm from "@/components/CourseEnquiryForm";

const courses = [
  {
    code: "01",
    title: "Full-Stack Development",
    detail:
      "Learn frontend, backend, databases and deployment—end to end, with production habits built in.",
  },
  {
    code: "02",
    title: "Data Science",
    detail:
      "Learn Python, data analysis, visualisation and machine learning with real datasets.",
  },
  {
    code: "03",
    title: "DSA and Interview Preparation",
    detail:
      "Develop problem-solving and technical interview skills through structured practice.",
  },
];

export default function CoursesPage() {
  return (
    <div className="flex min-h-full flex-col bg-paper text-ink">
      <header className="border-b border-line bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
          >
            Real Engineering
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-ink-soft">
            <Link
              href="/"
              className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
            >
              Home
            </Link>
            <a
              href="#enquiry"
              className="text-signal transition-colors hover:text-signal-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint"
            >
              Enquire
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="blueprint-grid relative overflow-hidden border-b border-line">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(46,123,196,0.14),transparent_50%),linear-gradient(to_bottom,transparent_50%,var(--paper)_100%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
            <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.22em] text-blueprint">
              Catalogue
            </p>
            <h1 className="animate-fade-up-delay-1 mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Our Courses
            </h1>
            <div className="animate-draw-line mt-5 h-px w-24 bg-signal" />
            <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Pick a track, then tell us what you need. We&apos;ll follow up with
              schedules, prerequisites, and how to join the next cohort.
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
            <ol className="divide-y divide-line border-y border-line">
              {courses.map((course) => (
                <li
                  key={course.code}
                  className="grid gap-4 py-8 transition-colors hover:bg-paper/80 sm:grid-cols-[5rem_1fr] sm:gap-10 md:grid-cols-[6rem_minmax(0,16rem)_1fr] md:items-baseline"
                >
                  <span className="font-mono text-sm text-blueprint">
                    {course.code}
                  </span>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {course.title}
                  </h2>
                  <p className="text-base leading-relaxed text-ink-soft sm:col-span-2 md:col-span-1">
                    {course.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CourseEnquiryForm />
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
