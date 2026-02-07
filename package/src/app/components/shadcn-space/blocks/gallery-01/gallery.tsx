import { Card } from "@/components/ui/card";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-9 py-10 w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* LEFT – Large card - Using aspect-[4/5] for a portrait look */}
          <Card className="group relative aspect-[4/5] md:aspect-auto overflow-hidden rounded-lg border-none p-0">
            <Image
              src="/images/about-me/cbp.png"
              alt="cyberpunk image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
              <h3 className="text-2xl font-semibold text-white">Games</h3>
            </div>
          </Card>

          {/* RIGHT SIDE */}
          <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
            {/* Top wide card - aspect-video works great here */}
            <Card className="group relative aspect-video overflow-hidden rounded-lg border-none p-0">
              <Image
                src="/images/about-me/bball-team.png"
                alt="basketball team image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-white">Basketball</h3>
              </div>
            </Card>

            {/* Bottom two cards - aspect-square or video */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="group relative aspect-square md:aspect-auto overflow-hidden rounded-lg border-none p-0">
                <Image
                  src="/images/about-me/bball-table.png"
                  alt="basketball table image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 ps-4 pb-4 md:ps-8 md:pb-8 z-10 flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white">Infinite Group</h3>
                </div>
              </Card>

              <Card className="group relative aspect-square md:aspect-auto overflow-hidden rounded-lg border-none p-0">
                <Image
                  src="/images/about-me/audio-mix.png"
                  alt="audio mixing image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 ps-4 pb-4 md:ps-8 md:pb-8 z-10 flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white">Mixing Audio</h3>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;