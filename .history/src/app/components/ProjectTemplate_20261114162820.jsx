// title & brief overview of project
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a2b3]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

// longer description of project's goal
function Paragraphs({ paragraphs = [] }) {
  return (
    <div className="space-y-6 text-base leading-8 text-zinc-400">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function ProjectTemplate({ project }) {
    // passing in all of the components and data from the project object to render the project page
  const {
    title,
    category,
    origin,
    tagline,
    projectType,
    focus,
    status,
    technologies = [],
    overview,
    goal,
    features = [],
    development,
    challenges = [],
    future,
    nextSteps = [],
    links,
  } = project;

  // has[example] checks if sections has content to display, and if so, renders the section
  const hasOverview = Boolean(overview?.paragraphs?.length);
  const hasDevelopment = Boolean(
    development?.paragraphs?.length || development?.steps?.length
  );
  const hasFuture = Boolean(
    future?.title || future?.paragraphs?.length || nextSteps.length
  );

  // pairs each value from json data with a title for the page
  const projectDetails = [
    { label: "Project Type", value: projectType },
    { label: "Focus", value: focus },
    { label: "Status", value: status },
  ].filter((detail) => detail.value);

  return (
    <main className="min-h-screen bg-[#100e10] text-zinc-200 selection:bg-[#c28d9e] selection:text-[#100e10]">
      {/* Hero */}
      <header className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[#9e5167]/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#c28d9e]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:py-32">
          {(category || origin) && (
            <div className="mb-8 flex flex-wrap items-center gap-3">
              {category && (
                <span className="rounded-full border border-[#c28d9e]/30 bg-[#c28d9e]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#e1b5c3]">
                  {category}
                </span>
              )}

              {origin && (
                <span className="text-sm text-zinc-500">
                  {origin}
                </span>
              )}
            </div>
          )}

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Project Case Study
          </p>

          <h1 className="max-w-4xl break-words text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>

          {tagline && (
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              {tagline}
            </p>
          )}

          {(hasOverview ||
            hasDevelopment ||
            links?.live ||
            links?.github) && (
            <div className="mt-10 flex flex-wrap gap-3">
              {hasOverview && (
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center rounded-full bg-[#c28d9e] px-6 py-3 text-sm font-semibold text-[#171014] transition-colors hover:bg-[#ddb0bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf]"
                >
                  Explore the project
                  <span aria-hidden="true" className="ml-2">
                    ↓
                  </span>
                </a>
              )}

              {hasDevelopment && (
                <a
                  href="#development"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-[#c28d9e]/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf]"
                >
                  Under the hood
                </a>
              )}

              {links?.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-[#c28d9e]/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf]"
                >
                  Live site
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                  <span className="sr-only">
                    {" "}
                    (opens in a new tab)
                  </span>
                </a>
              )}

              {links?.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-[#c28d9e]/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf]"
                >
                  GitHub
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                  <span className="sr-only">
                    {" "}
                    (opens in a new tab)
                  </span>
                </a>
              )}
            </div>
          )}

          {projectDetails.length > 0 && (
            <dl className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
              {projectDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {detail.label}
                  </dt>

                  <dd
                    className={`mt-2 text-sm ${
                      detail.label === "Status"
                        ? "text-[#dfafbf]"
                        : "text-zinc-200"
                    }`}
                  >
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Overview and technologies */}
        {(hasOverview || technologies.length > 0) && (
          <section
            id="overview"
            className="scroll-mt-28 border-b border-white/10 py-16 sm:py-24"
          >
            {hasOverview && (
              <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                <SectionHeading
                  eyebrow="Overview"
                  title={overview.title || "About the project."}
                />

                <Paragraphs paragraphs={overview.paragraphs} />
              </div>
            )}

            {technologies.length > 0 && (
              <div
                className={`rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 ${
                  hasOverview ? "mt-12" : ""
                }`}
              >
                <h3 className="mb-5 text-sm font-medium text-zinc-200">
                  Technologies & Frameworks
                </h3>

                <ul className="flex flex-wrap gap-3">
                  {technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-[#c28d9e]/20 bg-[#c28d9e]/[0.07] px-4 py-2 text-sm text-[#e0bac7] hover: bg-[#c28d9e]/[0.16] hover:text-[#f5d3dc] transition-colors hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf] ease-in-out duration-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Goal */}
        {goal && (
          <section className="border-b border-white/10 py-16 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <SectionHeading
                eyebrow="The Goal"
                title={goal.title || "What the project sets out to do."}
              />

              <div className="space-y-6">
                <Paragraphs paragraphs={goal.paragraphs} />

                {goal.main && (
                  <div className="border-l-2 border-[#c28d9e] pl-6">
                    <p className="text-lg leading-8 text-zinc-200">
                      {goal.main}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        {features.length > 0 && (
          <section className="border-b border-white/10 py-16 sm:py-24">
            <SectionHeading
              eyebrow="Key Features"
              title="The experience, feature by feature."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#181418] p-7 transition-colors hover:border-[#c28d9e]/40 hover:bg-[#1d171c]"
                >
                  <span className="text-xs font-medium tracking-[0.2em] text-[#c28d9e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 text-lg font-medium text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Technical breakdown */}
        {hasDevelopment && (
          <section
            id="development"
            className="scroll-mt-28 border-b border-white/10 py-16 sm:py-24"
          >
            <SectionHeading
              eyebrow="Under the Hood"
              title={development.title || "How it works."}
            />

            <div
              className={`grid gap-10 ${
                development.paragraphs?.length &&
                development.steps?.length
                  ? "lg:grid-cols-2 lg:gap-14"
                  : ""
              }`}
            >
              {development.paragraphs?.length > 0 && (
                <Paragraphs paragraphs={development.paragraphs} />
              )}

              {development.steps?.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-[#171317] p-6 sm:p-8">
                  <h3 className="mb-8 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {development.flowTitle || "How the pieces connect"}
                  </h3>

                  <ol className="space-y-6">
                    {development.steps.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c28d9e]/30 bg-[#c28d9e]/10 text-xs text-[#dfafbf]"
                        >
                          {index + 1}
                        </span>

                        <div className="min-w-0">
                          <h4 className="break-words font-mono text-sm text-zinc-200">
                            {step.title}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-zinc-500">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Challenges */}
        {challenges.length > 0 && (
          <section className="border-b border-white/10 py-16 sm:py-24">
            <SectionHeading
              eyebrow="Design & Development"
              title="Challenges & decisions."
            />

            <div className="divide-y divide-white/10">
              {challenges.map((challenge, index) => (
                <article
                  key={challenge.title}
                  className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[0.8fr_1.2fr] md:gap-12"
                >
                  <h3 className="flex gap-4 text-lg font-medium text-zinc-100">
                    <span
                      aria-hidden="true"
                      className="pt-1 text-xs text-[#c28d9e]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {challenge.title}
                  </h3>

                  <p className="text-base leading-8 text-zinc-400">
                    {challenge.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Current status and next steps */}
        {hasFuture && (
          <section className="py-16 sm:py-24">
            <div className="overflow-hidden rounded-3xl border border-[#c28d9e]/20 bg-[#1b1419]">
              <div
                className={`grid gap-10 p-7 sm:p-10 lg:p-12 ${
                  nextSteps.length > 0 &&
                  (future?.title || future?.paragraphs?.length)
                    ? "lg:grid-cols-2 lg:gap-16"
                    : ""
                }`}
              >
                {(future?.title || future?.paragraphs?.length) && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a2b3]">
                      Current Status & What’s Next
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {future.title || "A foundation to build on."}
                    </h2>

                    {future.paragraphs?.length > 0 && (
                      <div className="mt-6">
                        <Paragraphs paragraphs={future.paragraphs} />
                      </div>
                    )}
                  </div>
                )}

                {nextSteps.length > 0 && (
                  <div>
                    <h3 className="mb-5 text-sm font-medium text-zinc-200">
                      Planned improvements
                    </h3>

                    <ul className="space-y-4">
                      {nextSteps.map((step) => (
                        <li
                          key={step}
                          className="flex gap-3 rounded-xl border border-white/5 bg-black/15 p-4 text-sm leading-7 text-zinc-300 hover: bg-[#c28d9e]/[0.16] hover:text-[#f5d3dc] transition-colors hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf] ease-in-out duration-300"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c28d9e]"
                          />

                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-300">{title}</p>

          {technologies.length > 0 && (
            <p className="max-w-xl text-sm leading-6 sm:text-right">
              {technologies.join(" · ")}
            </p>
          )}
        </div>
      </footer>
    </main>
  );
}