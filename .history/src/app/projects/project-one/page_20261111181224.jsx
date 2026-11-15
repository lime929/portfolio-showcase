import projects from "@/data/projects.json";
import ProjectTemplate from "../../components/ProjectTemplate";

const project = projects.find(
  (item) => item.slug === "white-rabbit-co"
);

if (!project) {
  throw new Error(
    'Project data not found: "white-rabbit-co". Check data/projects.json.'
  );
}

export const metadata = {
  title: `${project.title} | Project Case Study`,
  description: project.tagline,
};

export default function ProjectOnePage() {
  return <ProjectTemplate project={project} />;
}