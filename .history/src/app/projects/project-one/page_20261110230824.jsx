import SectionHeading from "../../components/SectionHeading";

const technologies = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JSON",
  "Next.js Image",
  "React Icons",
  "Lucide React",
];

const features = [
  {
    number: "01",
    title: "Responsive Product Catalog",
    description:
      "A flexible clothing grid adapts from a single column on smaller screens to multi-column layouts on larger displays.",
  },
  {
    number: "02",
    title: "Dynamic Product Pages",
    description:
      "Each product opens its own detail page, populated with the matching item’s information through an ID-based route.",
  },
  {
    number: "03",
    title: "Detailed Product Information",
    description:
      "Product pages bring together photography, pricing, ratings, descriptions, fabric information, available sizes, and color swatches.",
  },
  {
    number: "04",
    title: "Mobile Navigation",
    description:
      "A collapsible menu keeps the main sections accessible on smaller screens and closes when a visitor selects a link.",
  },
  {
    number: "05",
    title: "Reusable Components",
    description:
      "Shared product cards and navigation components help keep the interface consistent and make updates easier to maintain.",
  },
  {
    number: "06",
    title: "Subtle Interface Effects",
    description:
      "Image zooms, card movement, and hover transitions provide visual feedback while staying consistent with the brand’s aesthetic.",
  },
];

const challenges = [
  {
    title: "Balancing atmosphere with readability",
    description:
      "The design pairs dark surfaces with contrasting text, clear spacing, and defined content sections so the gothic aesthetic supports rather than overwhelms the browsing experience.",
  },
  {
    title: "Adapting layouts across screen sizes",
    description:
      "Responsive grids, flexible product layouts, and a collapsible navigation menu allow the same content to work within different screen widths.",
  },
  {
    title: "Keeping product photography consistent",
    description:
      "Shared image proportions create a consistent catalog, while item-specific image positioning helps preserve the focal point of individual photographs.",
  },
];

const nextSteps = [
  "Connect the search field to product-name and keyword matching.",
  "Implement catalog filters for product categories and attributes.",
  "Track selected sizes and colors on product pages.",
  "Build a working cart with quantity controls and item removal.",
];



export const metadata = {
  title: "White Rabbit Co. | Project Case Study",
  description:
    "A look at the design and development of White Rabbit Co., a gothic-inspired fashion storefront built with Next.js, React, and Tailwind CSS.",
};

export default function ProjectOnePage() {
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
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#c28d9e]/30 bg-[#c28d9e]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#e1b5c3]">
              Frontend Development
            </span>

            <span className="text-sm text-zinc-500">
              Course project → Portfolio piece
            </span>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Project Case Study
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            White Rabbit
            <span className="text-[#c28d9e]"> Co.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
            A gothic-inspired fashion storefront combining a responsive
            product catalog with a distinct alternative-fashion identity.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#overview"
              className="inline-flex items-center justify-center rounded-full bg-[#c28d9e] px-6 py-3 text-sm font-semibold text-[#171014] transition-colors hover:bg-[#ddb0bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf]"
            >
              Explore the project
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </a>

            <a
              href="#development"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-[#c28d9e]/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb0bf]"
            >
              Under the hood
            </a>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Project Type
              </dt>
              <dd className="mt-2 text-sm text-zinc-200">
                Fashion storefront concept
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Focus
              </dt>
              <dd className="mt-2 text-sm text-zinc-200">
                Responsive UI & product browsing
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Status
              </dt>
              <dd className="mt-2 text-sm text-[#dfafbf]">
                Frontend prototype
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Overview */}
        <section
          id="overview"
          className="scroll-mt-28 border-b border-white/10 py-16 sm:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading
              eyebrow="01 / Overview"
              title="An alternative identity. A familiar shopping experience."
            />

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                White Rabbit Co. started as a project for a 300-level IT
                course and is now being developed into a portfolio piece.
                It presents an alternative-fashion brand through a
                multi-page website, bringing together clothing,
                accessories, brand information, and editorial content.
              </p>

              <p>
                The visual direction pairs dark backgrounds and muted
                pink accents with large product photography, rounded
                cards, and subtle hover effects. The same design language
                carries through the navigation, catalog, and individual
                product pages.
              </p>

              <p>
                The current focus is the frontend browsing experience:
                using layout, reusable components, structured content,
                and routing to create a cohesive storefront.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <h3 className="mb-5 text-sm font-medium text-zinc-200">
              Technologies & Frameworks
            </h3>

            <ul className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-[#c28d9e]/20 bg-[#c28d9e]/[0.07] px-4 py-2 text-sm text-[#e0bac7]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Goal */}
        <section className="border-b border-white/10 py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading
              eyebrow="02 / The Goal"
              title="More than a grid of products."
            />

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                The project brings the structure of an online clothing
                store together with the visual personality of a gothic
                and alternative-fashion brand.
              </p>

              <p>
                Visitors can move into the catalog, browse product cards,
                and open individual pages for more detailed information.
                Sections dedicated to the brand’s styles, story, and blog
                give the site an identity beyond its merchandise.
              </p>

              <div className="border-l-2 border-[#c28d9e] pl-6">
                <p className="text-lg leading-8 text-zinc-200">
                  The goal is a storefront that feels expressive without
                  making the browsing experience complicated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-white/10 py-16 sm:py-24">
          <SectionHeading
            eyebrow="03 / Key Features"
            title="Built around the browsing experience."
            description="The interface combines reusable elements with product-specific content to keep the experience consistent from the catalog to the detail page."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-[#181418] p-7 transition-colors hover:border-[#c28d9e]/40 hover:bg-[#1d171c]"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-[#c28d9e]">
                  {feature.number}
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

        {/* Technical breakdown */}
        <section
          id="development"
          className="scroll-mt-28 border-b border-white/10 py-16 sm:py-24"
        >
          <SectionHeading
            eyebrow="04 / Under the Hood"
            title="Structured data. Reusable presentation."
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                The catalog is driven by a local JSON file containing
                each product’s ID, name, price, images, description,
                sizes, and colors.
              </p>

              <p>
                The catalog page maps over that data to generate product
                cards. Each card links to a dynamic product route, where
                the matching item is retrieved using its ID. This keeps
                the product content separate from the components that
                display it.
              </p>

              <p>
                React state controls the mobile menu, while the current
                pathname determines the active navigation link. Product
                photography uses Next.js Image, with responsive sizing
                and item-specific positioning in the catalog cards.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#171317] p-6 sm:p-8">
              <p className="mb-8 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Product data flow
              </p>

              <ol className="space-y-6">
                {[
                  {
                    title: "clothing.json",
                    description: "Stores product content and attributes.",
                  },
                  {
                    title: "Catalog page",
                    description:
                      "Maps the data into reusable product cards.",
                  },
                  {
                    title: "Product card",
                    description:
                      "Links each item to its individual detail route.",
                  },
                  {
                    title: "/clothing/[id]",
                    description:
                      "Finds the matching product and renders its details.",
                  },
                ].map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c28d9e]/30 bg-[#c28d9e]/10 text-xs text-[#dfafbf]">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="font-mono text-sm text-zinc-200">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-500">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="border-b border-white/10 py-16 sm:py-24">
          <SectionHeading
            eyebrow="05 / Design & Development"
            title="Balancing character with clarity."
            description="The project’s design decisions address both the brand’s visual identity and the practical needs of a product-focused interface."
          />

          <div className="divide-y divide-white/10">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[0.8fr_1.2fr] md:gap-12"
              >
                <h3 className="flex gap-4 text-lg font-medium text-zinc-100">
                  <span className="pt-1 text-xs text-[#c28d9e]">
                    0{index + 1}
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

        {/* Status */}
        <section className="py-16 sm:py-24">
          <div className="overflow-hidden rounded-3xl border border-[#c28d9e]/20 bg-[#1b1419]">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a2b3]">
                  06 / What’s Next
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A foundation to build on.
                </h2>

                <p className="mt-6 text-base leading-8 text-zinc-400">
                  White Rabbit Co. is currently a frontend storefront
                  prototype, not a transaction-ready store. Product
                  browsing and detail-page navigation are implemented,
                  while search, filters, and Add to Cart remain interface
                  placeholders.
                </p>

                <p className="mt-4 text-base leading-8 text-zinc-400">
                  The next stage is to connect those controls to real
                  interactions while preserving the project’s visual
                  identity.
                </p>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-medium text-zinc-200">
                  Planned improvements
                </h3>

                <ul className="space-y-4">
                  {nextSteps.map((step) => (
                    <li
                      key={step}
                      className="flex gap-3 rounded-xl border border-white/5 bg-black/15 p-4 text-sm leading-7 text-zinc-300"
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
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-300">White Rabbit Co.</p>
          <p>Next.js · React · Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}