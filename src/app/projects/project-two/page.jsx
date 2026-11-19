import projects from "../../data/projects.json";
import ProjectTemplate from "../../components/ProjectTemplate";

const project = projects.find(
  (item) => item.slug === "local-sounds"
);

export const metadata = {
  title: `${project.title} | Case Study`,
  description: project.tagline,
};

export default function ProjectTwoPage() {
  const project = projects.find(
    (item) => item.slug === "local-sounds"
  );
  return (
    <><div className="project-page">
      <ProjectTemplate project={project} />
    </div></>

  );
}