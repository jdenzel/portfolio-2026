import Logo from "../logo";
import { MotionAnimation } from "@/components/ui/motion-animation";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center bg-muted dark:bg-black">
      <div className="container">
        <MotionAnimation delay={.1}>
          <div className="flex flex-col gap-1.5 items-center sm:items-start">
            <div className="relative flex items-center w-full">
              <div className="flex-grow h-px bg-primary" />
              <div className="mx-4">
                <Logo />
              </div>
              <div className="flex-grow h-px bg-primary" />
            </div>
          </div>
        </MotionAnimation>
      </div>
    </footer>
  );
};

export default Footer;
