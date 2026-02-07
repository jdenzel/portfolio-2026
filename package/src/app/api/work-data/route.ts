import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/score-app.png",
        title: "Basketball Scoring System",
        client: "Infinite Group",
        slug: "basketball-scoring-system",
        description: "Developed this app to modernize how Infinite Group tracks basketball games, moving away from paper scorebooks to a live, digital system. The biggest challenge was reliability—gym Wi-Fi is often spotty. To solve this, I designed an offline-first architecture that captures every play locally and syncs to the cloud in the background, ensuring no data is ever lost. I also implemented optimistic UI updates so the interface feels instant for scorekeepers, removing any lag between a tap and the action recording.",
        link: "",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
            "Supabase",
            "PostgreSQL",
            "Edge Functions",
            "Row Level Security (RLS)",
            "Realtime Subscriptions",
            "Progressive Web App (PWA)",
            "CI/CD (Vercel)",
            "Zustand",
            "TanStack Query",
        ],
        gallery: [
            "/images/work/score-app.png",
            "/images/work/scoring-app2.png",
        ]
    },
    {
        image: "/images/work/infinite-dashboard.png",
        title: "Dashboard Web Application",
        client: "Infinite Group",
        slug: "dashboard-web-application",
        description: "Designed and developed a centralized operations platform for a Infinite Group to streamline basketball league management and event registration. I engineered a solution to replace manual workflows with a dashboard that handles complex data relationships—automatically aggregating individual player statistics into team records and calculating real-time league standings. The dashboard is built with a scalable, type-safe architecture that ensures data consistency and provides administrators with instantaneous control over seasons, rosters, and financial tracking.",
        link: "",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Radix UI",
            "shadcn/ui",
            "Supabase",
            "PostgreSQL",
            "Row Level Security (RLS)",
            "Role-Based Access Control (RBAC)",
            "Realtime Subscriptions",
            "Optimistic UI",
            "Progressive Web App (PWA)",
            "CI/CD (Vercel)",
            "TanStack Query",
        ],
        gallery: [
            "/images/work/infinite-dashboard.png",
            "/images/work/infinite-dashboard2.png",
        ]
    },
    {
        image: "/images/work/tu-work.jpg",
        title: "Arts & Culture Campaign",
        client: "Towson University",
        slug: "tu-arts-culture-campaign",
        description: "Developed a dedicated landing page for the Arts & Culture Campaign to highlight Towson's vibrant community activities beyond the campus. Implemented Google Tag Manager to capture key user interactions for campaign analysis.",
        link: "",
        technologies: [
            "WordPress",
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "Google Tag Manager",
            "Docker"
        ],
        gallery: [
            "/images/work/tu-work.jpg",
            "/images/work/tu-work2.jpg",
        ]
    },
    {
        image: "/images/work/tu-map-work.png",
        title: "University Campus Map",
        client: "Towson University",
        slug: "tu-campus-map",
        description: "Worked with the Towson University GIS team to create an interactive campus map for Towson University, serving faculty, staff, students, and visitors. The map highlights key points of interest and includes accessibility information by displaying accessible routes and facilities. The work I contributed to this project was adding the branded header and additional styling to the sidebar. Built with HTML, CSS, React, and the Esri SDK, the application delivers a seamless and user-friendly navigation experience.",
        link: "https://maps.towson.edu/",
        technologies: [
            "React",
            "JavaScript",
            "Esri SDK",
            "HTML",
            "CSS",
        ],
        gallery: [
            "/images/work/tu-map-work.png",
            "/images/work/tu-map-work2.png",
        ]
    },
    {
        image: "/images/work/mdsci.png",
        title: "Company Rebranding",
        client: "Maryland Science Center",
        slug: "md-sci-redesign",
        description: "Worked with Mission Media on the Maryland Science Center's rebrand. I contributed by optimizing image and video assets to improve load times and overall site performance. The website was built using WordPress, with custom implementation in PHP, JavaScript, HTML, and CSS.",
        link: "",
        technologies: [
            "WordPress",
            "JavaScript",
            "HTML",
            "CSS",
            "PHP",
            "Docker",
            "Google Tag Manager"
        ],
        gallery: [
            "/images/work/mdsci.png",
            "/images/work/mdsci2.png",
        ]
    },
    {
        image: "/images/work/nasa-work.png",
        title: "Website Datapoints",
        client: "NASA",
        slug: "nasa-datapoints",
        description: "Collaborated with Mission Media to modernize NASA's Home and City website, migrating it from a legacy CMS to WordPress. I was responsible for structuring and migrating the beacon data points that power the interactive information displays on the website.",
        link: "https://homeandcity.nasa.gov/",
        technologies: [
            "WordPress",
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
        ],
        gallery: [
            "/images/work/nasa-work.png",
            "/images/work/nasa-work2.png",
        ]
    },
    {
        image: "/images/work/wtburnett-work.png",
        title: "Company Rebranding",
        client: "WTBurnett",
        slug: "wtburnett-redesign",
        description: "Assisted Mission Media with the corporate rebranding of WTBurnett. I was responsible for populating the new WordPress website with content, ensuring all text and media were accurately implemented.",
        link: "https://wtburnett.com/",
        technologies: [
            "WordPress",
            "HTML",
            "CSS"
        ],
        gallery: [
            "/images/work/wtburnett-work.png",
            "/images/work/wtburnett-work2.png",
        ]
    }
];

export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
