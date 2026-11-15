'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    return (
        <button 
          onClick={() => router.replace('/projects')}
          className="rounded-full border border-[var(--project-accent)]/20 bg-[var(--project-accent)]/[0.07] px-4 py-2 text-sm text-[var(--project-accent-text)] hover: bg-[var(--project-accent)]/[0.16] hover:text-[var(--project-accent-text)] transition-colors hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--project-accent-hover)] ease-in-out duration-300"
        >
          Back to all projects
        </button>
    )
}