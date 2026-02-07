"use client";
import { Marquee } from "@/app/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";
import Image from "next/image";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section>
      <div className="max-w-xl hidden lg:block">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            {brandList && brandList.length > 0 && (
              <div>
                <Marquee pauseOnHover className="[--duration:20s] p-0">
                  {brandList.map((brand, index) => (
                    <div key={index} className="flex items-center">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        width={144}
                        height={32}
                        className="w-36 h-8 mr-6 lg:mr-20 dark:hidden object-contain"
                      />
                      <Image
                        src={brand.lightimg}
                        alt={brand.name}
                        width={144}
                        height={32}
                        className="hidden dark:block w-36 h-8 mr-12 lg:mr-20 object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
