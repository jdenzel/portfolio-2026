"use client";
import React, { useEffect, useState } from "react";
import OrbitingCirclesDemo from "../../shadcn-space/blocks/orbiting-space/orbiting-circles";

const ExperienceSec = () => {
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setExperiences(data?.experiences || []);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="experience">
      <div className="py-16 md:py-32 relative overflow-hidden">
        <OrbitingCirclesDemo />
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between gap-2 border-b border-primary pb-7 mb-9 md:mb-16">

            <h2>Experience</h2>

            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-start relative"
              >
                <div className="relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-muted`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 3 ? "border-primary" : "border-black"
                        }`}
                    >
                      {index === 3 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl font-normal">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-normal text-primary">{exp.year}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
