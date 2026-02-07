"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MotionAnimation } from "@/components/ui/motion-animation";

import { educationData as staticEducationData, allSkills as staticAllSkills } from "@/lib/data";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(staticEducationData);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [skillsPerPage, setSkillsPerPage] = useState(8);
  const [allSkills, setAllSkills] = useState<any[]>(staticAllSkills);

  const totalPages = Math.ceil(allSkills.length / skillsPerPage);

  // Get current page skills
  const currentSkills = allSkills.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  );

  // Handle responsive skills per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSkillsPerPage(4); // Show 4 on mobile/small screens
      } else {
        setSkillsPerPage(8); // Show 8 on larger screens
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-carousel functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000); // Change page every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, totalPages]);

  return (
    <section id="education-skills">
      <div className="border-t border-muted overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={"/images/home/education-skill/edu-skill-vector.svg"}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <MotionAnimation delay={.1}>
              <div className="flex items-center justify-between gap-2 border-b border-primary pb-7 mb-9 xl:mb-16">
                <h2>Education & Skills</h2>
                <p className="text-xl text-primary">( 03 )</p>
              </div>
            </MotionAnimation>
            <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-20">
              {/* Education Section */}
              <MotionAnimation delay={.2}>
                <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                  {educationData?.education?.map((value: any, index: any) => {
                    return (
                      <div key={index} className="flex items-start gap-6">
                        <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-primary">
                          <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                          <h4>{value?.title}</h4>
                          <p className="font-normal pl-10">{value?.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </MotionAnimation>
              {/* Skills Section */}
              <MotionAnimation delay={.3}>
                <div className="w-full lg:flex-1">
                  <div
                    className="flex items-start gap-8"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {/* Skills Grid */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1"
                      >
                        {currentSkills.map((skill, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-background border border-muted hover:border-primary transition-all duration-300 group"
                          >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center p-2 rounded-lg dark:bg-white/10">
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <p className="text-xs text-center font-medium uppercase tracking-wide">
                              {skill.name}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>

                    {/* Vertical Dashed Navigation */}
                    <div className="flex flex-col items-center justify-center gap-3 py-4">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index)}
                          className={`w-0.5 rounded-full transition-all duration-300 before:!content-none px-3 py-2 ${index === currentPage
                            ? "h-12 bg-primary"
                            : "h-6 bg-muted-foreground/30 hover:bg-primary/50"
                            }`}
                          aria-label={`Go to page ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </MotionAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
