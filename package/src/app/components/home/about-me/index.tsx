import Image from "next/image";
import Gallery from "../../shadcn-space/blocks/gallery-01/gallery";
import { Gamepad2, Laugh, Music } from "lucide-react";
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
            <MotionAnimation delay={0.1}>
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
                    Hi, my name is Denzel. I'm a recent graduate from Towson
                    University and an aspiring Full-Stack Software Engineer with
                    a passion for tackling complex architectural challenges and
                    engineering software solutions. I'm proficient in developing
                    with modern tech tools including Next.js, React.js, Node.js,
                    Typescript, and Tailwind CSS, coupled with robust database
                    management using Supabase. I'm currently the Technical Lead
                    at Infinite Group where I build the digital infrastructure
                    needed to empower our local community through sports. I also
                    lead the tech team at River of Life International Christian
                    Fellowship, using my technical expertise to foster
                    connection and bring people closer to Christ. My personal
                    goal is to use all the skills that I learn and the
                    experience I gain, to help and serve my community. 1st Peter
                    4:10 As each has received a gift, use it to serve one
                    another, as good stewards of God's varied grace
                  </p>
                </MotionAnimation>

                <MotionAnimation delay={0.4}>
                  <div className="flex justify-around pt-10 xl:pt-16 pb-2  border-b border-primary">
                    <Laugh className="bg-red-500/10 text-red-500 p-2 rounded-full size-15" />
                    <Gamepad2 className="bg-green-500/10 text-green-500 p-2 rounded-full size-15" />
                    <Music className="bg-blue-500/10 text-blue-500 p-2 rounded-full size-15" />
                  </div>
                </MotionAnimation>
              </div>
            </div>
          </div>
        </div>
        <MotionAnimation delay={0.5}>
          <Gallery />
        </MotionAnimation>
      </div>
    </section>
  );
};

export default AboutMe;
