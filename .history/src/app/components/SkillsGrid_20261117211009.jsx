'use client';
import { useEffect, useRef } from "react";

// pulls icons from devicon and simple icons github repos
const DEVICON_LATEST = "https://github.com/devicons/devicon/tree/v2.18.0/icons";
const SIMPLE = "https://cdn.simpleicons.org";

// const skills = [
//   { name: "UI/UX DESIGN", category: "UI/UX Design", icon: `${SIMPLE}/adobexd/FF61F6` },
//   { name: "WIREFRAMING", category: "UI/UX Design", icon: `${SIMPLE}/framer/0055FF` },
//   { name: "PROTOTYPING", category: "UI/UX Design", icon: `${SIMPLE}/invision/FF3366` },
//   { name: "VS CODE", category: "Tools & Systems", icon: `${DEVICON}/vscode/vscode-original.svg` }
// ];


const skills = [
  { name: "REACT.JS", category: "Frontend Web", icon: `${SIMPLE}/react/61DAFB` },
  { name: "JAVASCRIPT", category: "Frontend Web", icon: `${SIMPLE}/javascript/F7DF1E` },
  { name: "NODE.JS", category: "Frontend Web", icon: `${SIMPLE}/nodedotjs/5FA04E` },
  { name: "HTML5", category: "Frontend Web", icon: `${SIMPLE}/html5/E34F26` },
  { name: "CSS3", category: "Frontend Web", icon: `${SIMPLE}/css/663399` },
  { name: "TAILWIND", category: "Frontend Web", icon: `${SIMPLE}/tailwindcss/06B6D4` },
  { name: "BOOTSTRAP", category: "Frontend Web", icon: `${SIMPLE}/bootstrap/7952B3` },
  { name: "VITE", category: "Frontend Web", icon: `${SIMPLE}/vite/9135FF` },
  { name: "GITHUB", category: "Tools & Systems", icon: `${SIMPLE}/github/181717` },
  { name: "FIGMA", category: "UI/UX Design", icon: `${SIMPLE}/figma/F24E1E` },


];


function SkillCard({ name, category, icon, index }) {
  const ref = useRef(null);
  // Stagger the reveal delay across each row of four: delay-100 ... delay-400
  const delay = ((index % 4) + 1) * 100;

  return (
    <div
      ref={ref}
      className={`group flex min-w-0 select-none items-center gap-2.5 px-6 rounded-2xl border border-dark-grey/15 bg-white/70 p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-dark-purple/60 hover:bg-white hover:shadow-lg hover:shadow-dark-grey/10 sm:gap-3.5 sm:p-3.5 reveal-pop delay-${delay}`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-dark-purple/20 bg-light-purple/30 p-2 transition-colors group-hover:bg-light-purple/50 sm:h-12 sm:w-12 sm:p-2.5 md:h-14 md:w-14">
        <img
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          src={icon}
        />
      </div>
      <div className="flex min-w-0 flex-grow flex-col items-start">
        <h3 className="w-full truncate text-[12px] font-bold tracking-wide text-dark-grey sm:text-[14px] md:text-[15px]">
          {name}
        </h3>
        <span className="mt-1 inline-block max-w-full truncate rounded-full border border-dark-purple/20 bg-light-purple/25 px-2 py-0.5 text-[9px] font-medium text-darkest-purple sm:text-[11px]">
          {category}
        </span>
      </div>
    </div>
  );
}
export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4">
      {skills.map((skill, i) => (
        <SkillCard key={skill.name} index={i} {...skill} />
      ))}
    </div>
  );
}
