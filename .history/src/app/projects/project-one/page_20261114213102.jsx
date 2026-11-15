import projects from "../../data/projects.json";
import ProjectTemplate from "../../components/ProjectTemplate";

const project = projects.find(
  (item) => item.slug === "white-rabbit-co"
);

export const metadata = {
  title: `${project.title} | Case Study`,
  description: project.tagline,
};

export default function ProjectOnePage() {
  return <ProjectTemplate 
  project={project[0]} />;
}