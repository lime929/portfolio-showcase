"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import flower from "../../../public/images/flowers/white-flower-short.png";

export default function Footer() {
  const email = "lsmendez117@gmail.com";
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Copied!");
    } catch {
      setCopyStatus("Try again");
    }
  }

  return (
    <footer className="bg-light-purple border-t-2 border-dark-grey w-[100%] xl:h-[275px] 2xl:h-[275px]">
      <div className="px-4 lg:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pl-7 lg:pl-23 gap-5">
          <div>
            <h2 className="text-dark-grey text-5xl font-two tracking-widest font-semibold pb-4 pt-8">
              Like what you see?
            </h2>

            <p className="pb-2 text-lg">
              Let's talk projects, opportunities, or anything web
              development!
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              {/* Email and hover-revealed copy button */}
              <div
                className="group inline-flex items-center gap-3 rounded-[10px] bg-dark-grey px-4 py-2 text-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark-grey hover:shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                onMouseLeave={() => setCopyStatus("Copy")}>
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-semibold tracking-widest">
                  {email}
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="max-w-0 overflow-hidden whitespace-nowrap rounded bg-dark-grey px-0 py-1 text-sm text-white opacity-0 transition-all duration-300 ease-out group-hover:max-w-24 group-hover:px-2 group-hover:opacity-100 group-focus-within:max-w-24 group-focus-within:px-2 group-focus-within:opacity-100 cursor-pointer">
                  <span aria-live="polite">{copyStatus}</span>
                </button>
              </div>

              <Link
                href="https://www.linkedin.com/in/liliana-mendez-7409372b2/"
                className="inline-flex h-[45px] items-center justify-center rounded-[10px] bg-dark-grey px-4 text-sm font-semibold tracking-widest text-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark-grey hover:shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>

            <p className="mt-8 text-dark-grey text-sm">
              &copy; {currentYear || "2026"} Liliana Mendez. All rights
              reserved.
            </p>
          </div>

          <div className="justify-self-center w-auto h-auto pt-3 transition duration-300 ease-in-out rotate-0 hover:rotate-10 md:justify-self-end md:pr-31">
            <Image
              src={flower}
              alt="White flower illustration"
              width={160}
              height={200}
              priority
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}