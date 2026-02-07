"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import WorkDialog from "./work-dialog";
import { MotionAnimation } from "@/components/ui/motion-animation";

import { workData as staticWorkData } from "@/lib/data";

// Define the type for work items based on the data structure
interface WorkItem {
  image: string;
  title: string;
  client: string;
  slug: string;
  description: string;
  technologies?: string[];
  link: string;
  gallery: string[];
}

const LatestWork = () => {
  const [workData, setWorkData] = useState<WorkItem[]>(staticWorkData);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Config
  const itemsPerPage = 4;
  const totalPages = Math.ceil(workData.length / itemsPerPage);

  // Get current items
  const currentItems = workData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleWorkClick = (work: WorkItem) => {
    setSelectedWork(work);
    setIsDialogOpen(true);
  };

  return (
    <section id="latest-work" className="py-16 md:py-32 border-t border-muted">
      <div className="container">
        <MotionAnimation delay={.1}>
          <div className="flex items-center justify-between gap-2 border-b border-primary pb-7 mb-9 xl:mb-16">
            <h2>Latest Work</h2>
            <p className="text-xl text-primary">( 04 )</p>
          </div>
        </MotionAnimation>

        <div className="flex flex-col gap-10">
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {currentItems.map((work, index) => (
                  <MotionAnimation delay={.2}>
                    <div
                      key={index}
                      onClick={() => handleWorkClick(work)}
                      className="group cursor-pointer flex flex-col gap-4"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-muted bg-muted/30 transition-colors group-hover:border-primary">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {work.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Client: {work.client}
                        </p>
                      </div>
                    </div>
                  </MotionAnimation>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-6 rounded-full transition-all duration-300 ${index === currentPage
                    ? "w-12 bg-primary"
                    : "w-6 bg-muted-foreground/30 hover:bg-primary/50"
                    }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <WorkDialog
        work={selectedWork}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
};

export default LatestWork;
