'use client';
import { useEffect, useRef } from "react";

// pulls icons from devicon and simple icons github repos
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const DEVICON_LATEST = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE = "https://cdn.simpleicons.org";

const skills = [
  { name: "JAVASCRIPT", category: "Frontend Web", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "NODE.JS", category: "Frontend Web", icon: `${SIMPLE}/nodejs/#1DAFB` },
  { name: "HTML5", category: "Frontend Web", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS3", category: "Frontend Web", icon: `${DEVICON}/css3/css3-original.svg` },
  { name: "TAILWIND", category: "Frontend Web", icon: `${DEVICON_LATEST}/tailwindcss/tailwindcss-original.svg` },
  { name: "BOOTSTRAP", category: "Frontend Web", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { name: "VITE", category: "Frontend Web", icon: `${DEVICON_LATEST}/vitejs/vitejs-original.svg` },
  { name: "FIGMA", category: "UI/UX Design", icon: `${DEVICON}/figma/figma-original.svg` },
  { name: "UI/UX DESIGN", category: "UI/UX Design", icon: `${SIMPLE}/adobexd/FF61F6` },
  { name: "WIREFRAMING", category: "UI/UX Design", icon: `${SIMPLE}/framer/0055FF` },
  { name: "PROTOTYPING", category: "UI/UX Design", icon: `${SIMPLE}/invision/FF3366` },
  { name: "GIT", category: "Tools & Systems", icon: `${DEVICON}/Git/F03C2E` },
  { name: "GITHUB", category: "Tools & Systems", icon: `${SIMPLE}/github/181717` },
  { name: "VS CODE", category: "Tools & Systems", icon: `${DEVICON}/vscode/vscode-original.svg` }
];

// const SIMPLE = "https://cdn.simpleicons.org";

const skills = [
  { name: "GITHUB", category: "Tools & Systems", icon: `${SIMPLE}/github/181717` },
  { name: "REACT.JS", category: "Tools & Systems", icon: `${SIMPLE}/react/61DAFB` },
    { name: "JAVASCRIPT", category: "Frontend Web", icon: `${DEVICON}/javascript/F7DF1E` },

];


function SkillCard({ name, category, icon, index }) {
  const ref = useRef(null);
  // Stagger the reveal delay across each row of four: delay-100 ... delay-400
  const delay = ((index % 4) + 1) * 100;

  // Adds "reveal-visible" the first time the card scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white border-2 sm:border-3 border-on-surface rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3.5 brick-shadow hover:-translate-y-1 transition-transform group select-none min-w-0 reveal-pop delay-${delay}`}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl border-2 border-on-surface bg-[#f3f4f6] flex items-center justify-center p-2 flex-shrink-0 group-hover:bg-surface transition-colors">
        <img
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          src={icon}
          // Hide the icon if it fails to load (the original HTML did this for some icons)
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="flex flex-col items-start min-w-0 flex-grow">
        <h3 className="font-button-text text-on-surface font-black text-[12px] sm:text-[14px] md:text-[15px] tracking-wide uppercase truncate w-full">
          {name}
        </h3>
        <span className="bg-brick-yellow border border-on-surface/90 px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[11px] font-bold text-on-surface font-label-caps inline-block mt-0.5 truncate max-w-full">
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


