import Image from "next/image";
import Gallery from "../../shadcn-space/blocks/gallery-01/gallery";
import { MotionAnimation } from "@/components/ui/motion-animation";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="relative bg-muted dark:bg-gradient-to-b from-[#1a1a1a] to-black py-10 md:py-32">
        <div className="absolute top-0 w-full px-9 dark:opacity-20">
          <Image
            src="/images/home/about-me/resume-bg-img.svg"
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <MotionAnimation delay={.1}>
              <div className="flex items-center justify-between gap-2 border-b border-primary pb-7">
                <h2>About Me</h2>
                <p className="text-xl text-primary">( 01 )</p>
              </div>
            </MotionAnimation>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <MotionAnimation
                delay={0.2}
                fullWidth={false}
                className="w-[450px] h-auto hidden lg:flex"
              >
                <Image
                  src="/images/home/about-me/profile-pic2.svg"
                  alt="profile-pic2"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </MotionAnimation>

              <div className="w-full lg:max-w-2xl flex-1">
                <MotionAnimation delay={0.3}>
                  <p className="text-lg">
                    Student studying computer science at Towson University with a
                    strong interest in web development. Experienced in building
                    modern web applications using Next.js and Supabase, with a
                    focus on clean architecture and real-world usability. I
                    currently serve as IT Lead at my local church where I manage
                    the Network Infrastructure and AV technology, as well as serve
                    as a board member of Infinite Group where I build applications
                    for our basketball league and solve technical problems.
                    Outside of tech, I enjoy shooting hoops in basketball, playing
                    story-driven games like Cyberpunk 2077 and The Witcher 3, and
                    mixing audio.
                  </p>
                </MotionAnimation>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-primary"></div>
              </div>
            </div>
          </div>
        </div>
        <MotionAnimation delay={.4}>
          <Gallery />
        </MotionAnimation>
      </div>
    </section >
  );
};

export default AboutMe;
