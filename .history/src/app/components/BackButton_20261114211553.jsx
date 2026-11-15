'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    return (
        <button 
          onClick={() => router.replace('/projects')}
          className="group inline-flex items-center gap-2 mb-12 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 px-6 py-3 rounded-lg font-bold text-base border border-zinc-700 hover:border-zinc-500 hover:shadow-lg transition-all duration-300"
        >
          Back to all projects
        </button>
    )
}