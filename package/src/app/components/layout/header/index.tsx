"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "../logo";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            <a
              href="/resume/Software Developer Resume 2026.pdf"
              download="Software Developer Resume 2026.pdf"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "button relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
              )}
            >
              <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-500">
                Download PDF Resume
              </span>
            </a>
            <ThemeToggle className="ml-auto" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
