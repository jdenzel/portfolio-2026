"use client";
import Image from "next/image";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface WorkItem {
    image: string;
    title: string;
    client: string;
    slug: string;
    description: string
    technologies?: string[];
    link: string;
    gallery: string[];
}

interface WorkDialogProps {
    work: WorkItem | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const WorkDialog = ({ work, open, onOpenChange }: WorkDialogProps) => {
    if (!work) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="min-w-[90vw] w-full h-[90vh] max-h-[90vh] overflow-hidden p-0">
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-0 h-full">
                    {/* Left side - Image Carousel */}
                    <div className="relative bg-muted/30 flex items-center justify-center h-[60%] sm:h-full sm:col-span-2">
                        <Carousel className="w-full h-full [&>div]:h-full">
                            <CarouselContent className="h-full ml-0">
                                {work.gallery.map((imageUrl, index) => (
                                    <CarouselItem key={index} className="flex items-center justify-center h-full pl-0">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={imageUrl}
                                                alt={`${work.title} - Image ${index + 1}`}
                                                fill
                                                className="object-contain"
                                                sizes="100vw"
                                                quality={100}
                                                priority={index === 0}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious variant="default" className="left-4" />
                            <CarouselNext variant="default" className="right-4" />
                        </Carousel>
                    </div>


                    {/* Right side - Project Details */}
                    <div className="flex flex-col p-6 sm:p-8 lg:p-12 overflow-y-auto h-[40%] sm:h-full sm:col-span-1 border-t sm:border-t-0">
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-3xl lg:text-4xl font-bold mb-2">
                                {work.title}
                            </DialogTitle>
                            <p className="text-muted-foreground text-lg">
                                Client: {work.client}
                            </p>
                        </DialogHeader>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3">About Project</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {work.description}
                                </p>
                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {work.technologies?.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {work.link && (
                                <div className="pt-4">
                                    <Link
                                        href={work.link}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        <span>View Project</span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.5 5L12.5 10L7.5 15"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default WorkDialog;
