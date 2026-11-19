import Image from next/image;
export default function ProjectCard({project}) {
    const {
    theme,
    image,
    alt,
    title,
    tagline,
    links,
  } = project;
    return (
        <section className="bg-white">
            <h1 className="max-w-4xl break-words text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
        </section>
    )
}