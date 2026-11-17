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
  const project = projects.find(
    (item) => item.slug === "white-rabbit-co"
  );
  return (
    <div className="w-90% max-w-7xl mx-auto bg-dark-grey">
      <ProjectTemplate project={project}/>
    </div>
  );
}