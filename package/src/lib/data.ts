
export const contactBar = {
    contactItems: [
        {
            type: "email",
            label: "jdenzelmab@gmail.com",
            icon: "/images/icon/mail-icon.svg",
            link: "mailto:jdenzelmab@gmail.com"
        },

    ],
    socialItems: [
        {
            platform: "github",
            icon: "/images/icon/github-icon.svg",
            link: "https://github.com/jdenzel"
        },
        {
            platform: "linkedin",
            icon: "/images/icon/linkedin-icon.svg",
            link: "https://www.linkedin.com/in/jdenzelmabilangan/"
        },
    ]
};


export const educationData = {
    education: [
        {
            title: "Bachelors Computer Science",
            description: "Towson University | May 2026"
        },
        {
            title: "Software Engineering",
            description: "Flatiron School | October 2023"
        },
        {
            title: "Associates of Science",
            description: "CCBC Essex | May 2022"
        },
    ],
}

export const allSkills = [
    { name: "HTML", icon: "/images/technologies/html-icon.svg" },
    { name: "CSS", icon: "/images/technologies/css-icon.svg" },
    { name: "JavaScript", icon: "/images/technologies/javascript-icon.svg" },
    { name: "React", icon: "/images/technologies/react-icon.svg" },
    { name: "TypeScript", icon: "/images/technologies/typescript-icon.svg" },
    { name: "Next.js", icon: "/images/technologies/nextjs-icon.svg" },
    { name: "Supabase", icon: "/images/technologies/supabase-icon.svg" },
    { name: "Figma", icon: "/images/technologies/figma-icon.svg" },
    { name: "Vercel", icon: "/images/technologies/vercel-icon.svg" },
    { name: "Python", icon: "/images/technologies/python-icon.svg" },
    { name: "Django", icon: "/images/technologies/django-icon.svg" },
    { name: "Flask", icon: "/images/technologies/flask-icon.svg" },
    { name: "PostgreSQL", icon: "/images/technologies/postgresql-icon.svg" },
    { name: "Docker", icon: "/images/technologies/docker-icon.svg" },
    { name: "GitLab", icon: "/images/technologies/gitlab-icon.svg" },
    { name: "Prisma", icon: "/images/technologies/prisma-icon.svg" },
    { name: "Java", icon: "/images/technologies/java-icon.svg" },
    { name: "C++", icon: "/images/technologies/cplusplus-icon.svg" },
];

export const experiences = [
    {
        title: "IT Lead",
        year: "June 2018 - Present",
        company: "River Of Life ICF",
        description:
            "Suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
        title: "Board Member",
        year: "Aug 2023 - Present",
        company: "Infinite Group Inc.",
        description:
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
        title: "Developer Intern",
        year: "June 2025",
        company: "Mission Media",
        description: ""
    },
    {
        title: "Developer Intern",
        company: "Towson University CGIS",
        description:
            "Release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software",
    },
];


export const contactLinks = {
    socialLinks: [
        {
            title: "Github",
            href: "https://github.com/jdenzel"
        },
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/jdenzelmabilangan/"
        },
    ],
    contactInfo: [
        {
            type: "email",
            label: "jdenzelmab@gmail.com",
            link: "mailto:jdenzelmab@gmail.com"
        },
    ]
}

export const brandList = [
    {
        image: "/images/technologies/react-icon.svg",
        lightimg: "/images/technologies/react-icon.svg",
        name: "React",
    },
    {
        image: "/images/technologies/html-icon.svg",
        lightimg: "/images/technologies/html-icon.svg",
        name: "HTML",
    },
    {
        image: "/images/technologies/css-icon.svg",
        lightimg: "/images/technologies/css-icon.svg",
        name: "CSS",
    },
    {
        image: "/images/technologies/javascript-icon.svg",
        lightimg: "/images/technologies/javascript-icon.svg",
        name: "JavaScript",
    },
    {
        image: "/images/technologies/typescript-icon.svg",
        lightimg: "/images/technologies/typescript-icon.svg",
        name: "TypeScript",
    },
    {
        image: "/images/technologies/nextjs-icon.svg",
        lightimg: "/images/technologies/nextjs-icon.svg",
        name: "Next.js",
    },
    {
        image: "/images/technologies/figma-icon.svg",
        lightimg: "/images/technologies/figma-icon.svg",
        name: "Figma",
    },
    {
        image: "/images/technologies/postgresql-icon.svg",
        lightimg: "/images/technologies/postgresql-icon.svg",
        name: "PostgreSQL",
    },
    {
        image: "/images/technologies/docker-icon.svg",
        lightimg: "/images/technologies/docker-icon.svg",
        name: "Docker",
    },
    {
        image: "/images/technologies/java-icon.svg",
        lightimg: "/images/technologies/java-icon.svg",
        name: "Java",
    },
    {
        image: "/images/technologies/python-icon.svg",
        lightimg: "/images/technologies/python-icon.svg",
        name: "Python",
    },
];

export const workData = [
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
