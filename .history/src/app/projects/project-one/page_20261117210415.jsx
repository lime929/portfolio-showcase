import projects from "../../data/projects.json";
import ProjectTemplate from "../../components/ProjectTemplate";
import styles from "../../globals.css";
import SkillsGrid from "../../components/SkillsGrid";

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
    <><div className="project-page">
      <ProjectTemplate project={project} />
    </div><SkillsGrid /></>

  );
}