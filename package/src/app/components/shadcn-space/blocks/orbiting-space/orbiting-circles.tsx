import React from "react";
import { LucideIcon, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import "./orbiting-circles.css"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircleIcons({
  className,
  children,
  reverse,
  duration = 20,
  radius = 300,
  path = true,
  speed = .5,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className=""
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": `${calculatedDuration}s`,
                "--radius": `${radius}px`,
                "--angle": `${angle}deg`,
              } as React.CSSProperties
            }
            className={cn("animate-orbit", reverse && "reverse", className)}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

export default function OrbitingCirclesDemo() {

  type IconData = {
    IconComponent: LucideIcon;
    bgColor: string;
    textColor: string;
    label: string;
  };


  const circle1Icons: IconData[] = [
    { IconComponent: Code, bgColor: "bg-orange-400/10", textColor: "text-orange-400", label: "code" },
    { IconComponent: Code, bgColor: "bg-red-500/10", textColor: "text-red-500", label: "code" },
    { IconComponent: Code, bgColor: "bg-yellow-400/10", textColor: "text-yellow-400", label: "code" },
    { IconComponent: Code, bgColor: "bg-orange-400/10", textColor: "text-orange-400", label: "code" },
    { IconComponent: Code, bgColor: "bg-red-500/10", textColor: "text-red-500", label: "code" },
    { IconComponent: Code, bgColor: "bg-yellow-500/10", textColor: "text-yellow-500", label: "code" },
  ];

  return (
    <div className="w-full h-full absolute opacity-60 translate-y-1/2 scale-0 lg:scale-275">
      <div className="relative flex min-h-150 w-full items-center justify-center overflow-hidden">
        <OrbitingCircleIcons>
          {circle1Icons.map(({ IconComponent, bgColor, textColor, label }, index) => (
            <div key={index} className={cn("p-2 rounded-full", bgColor, textColor)} aria-label={label}>
              <IconComponent className="size-6" />
            </div>
          ))}
        </OrbitingCircleIcons>
      </div>
    </div>
  );
}
