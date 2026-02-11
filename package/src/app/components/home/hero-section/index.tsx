"use client";

import Image from "next/image";
import SplashCursor from "../../shadcn-space/animations/splash-cursor";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MotionAnimation } from "@/components/ui/motion-animation";

const index = () => {
  return (
    <section id="home" className="relative hero-section xs:h-[85vh] sm:h-auto xl:h-[92vh] overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52 w-full md:pb-10">
      <div className="absolute top-24 -z-10 w-full h-full rounded-full blur-3xl bg-linear-to-r from-orange-100 via-white to-orange-100 transition-opacity duration-500 dark:opacity-0" />
      <div className="absolute top-24 -z-10 w-full h-full rounded-full blur-3xl bg-linear-to-r from-slate-800 via-black to-stone-700 opacity-0 dark:opacity-100 transition-opacity duration-500" />
      <div className="container ">
        <div className="absolute inset-0 -z-1 pointer-events-none">
          <SplashCursor
            SIM_RESOLUTION={128}
            DYE_RESOLUTION={1440}
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
          />
        </div>
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-lg md:2xl">
            <div>
              <div className="flex items-center gap-8">
                <MotionAnimation delay={0} fullWidth={false}>
                  <h4 className="lg:text-4xl md:text-3xl tex  t-2xl font-medium leading-14 md:leading-20 lg:leading-24">
                    Hi Im Denzel
                  </h4>
                </MotionAnimation>
                <MotionAnimation delay={0.2} fullWidth={false}>
                  <div className="wave">
                    <Image
                      src={"/images/home/banner/wave-icon.svg"}
                      alt="wave-icon"
                      width={62}
                      height={62}
                      className=""
                    />
                  </div>
                </MotionAnimation>
              </div>
              <MotionAnimation delay={0}>
                <h1 className="lg:text-8xl md:text-7xl text-5xl font-medium leading-14 md:leading-20 lg:leading-24">
                  Software Developer
                </h1>
              </MotionAnimation>
            </div>
            <MotionAnimation delay={0.1}>
              <p className="text-xl font-normal  max-w-2xl text-muted-foreground">
                Computer Science Student at Towson University excited to solve real world problems and bring ideas to life
              </p>
            </MotionAnimation>
            <MotionAnimation delay={0.1}>
              <div className="text-base font-normal max-w-2xl text-muted-foreground">
                <Button
                  onClick={() => {
                    const element = document.getElementById("about-me");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-primary relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 transition-all duration-500">
                    About Me
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-90">
                    <ArrowRight size={16} className="transition-all duration-500" />
                  </div>
                </Button>
              </div>
            </MotionAnimation>
          </div>
          <MotionAnimation delay={0.2}>
            <Image
              src={"/images/home/banner/profile-pic.svg"}
              alt="profile-pic"
              width={685}
              height={650}
              className="block md:hidden xs:w-[450px] mr-auto ml-auto"
            />
          </MotionAnimation>
        </div>
      </div>
      <MotionAnimation
        delay={0.2}
        fullWidth={false}
        className="absolute right-0 top-0 hidden h-auto w-1/2 md:block 2xl:h-171.5 2xl:w-187.5"
      >
        <Image
          src={"/images/home/banner/profile-pic.svg"}
          alt="profile-pic"
          width={685}
          height={650}
          className="block ml-auto"
        />
      </MotionAnimation>
    </section>
  );
};

export default index;
