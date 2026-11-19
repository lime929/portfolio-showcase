import projects from "../../data/projects.json";
import ProjectTemplate from "../../components/ProjectTemplate";

const project = projects.find(
  (item) => item.slug === "voces-del-viento"
);

export const metadata = {
  title: `${project.title} | Case Study`,
  description: project.tagline,
};

export default function ProjectOnePage() {
  const project = projects.find(
    (item) => item.slug === "voces-del-viento"
  );
  return (
    <><div className="project-page">
      <ProjectTemplate project={project} />
    </div></>

  );
}