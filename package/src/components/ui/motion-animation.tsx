"use client";

import { motion, Variants } from "motion/react";

interface MotionAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
    variant?: "default" | "spring";
}

export const MotionAnimation = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = true,
    variant = "default",
}: MotionAnimationProps) => {
    const getVariants = (): Variants => {
        if (variant === "spring") {
            return {
                hidden: {
                    opacity: 0,
                    scale: 0.8,
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }
                }
            }
        }

        // Default variant
        return {
            hidden: {
                opacity: 0,
                x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
                y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration,
                    delay,
                    ease: "easeInOut",
                },
            },
        };
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={getVariants()}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
};
