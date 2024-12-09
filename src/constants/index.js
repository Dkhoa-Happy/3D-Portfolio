import {FileSearch, TerminalSquare, Layout, Gauge, Home, Info, Code, Mail} from 'lucide-react'

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
        icon: Home
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
        icon: Info
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
        icon: Code
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
        icon: Mail
    },
];

export const workflowSteps = [
    {
        id: 1,
        title: "Analyzing Requirements",
        description: "Review requirements from the design (UI/UX) and project management teams. Break down the interface into components and understand user interactions.",
        example: "Examine designs in Figma/Adobe XD to fully understand layouts and element behaviors.",
        icon: FileSearch
    },
    {
        id: 2,
        title: "Setting Up the Development Environment",
        description: "Initialize projects using frameworks like React.js or Next.js. Utilize Git/GitHub for source code management and team collaboration. Configure ESLint, Prettier to maintain clean and standardized code.",
        example: "Tools: React.js, Next.js, Git/GitHub, ESLint, Prettier",
        icon: TerminalSquare
    },
    {
        id: 3,
        title: "Building the User Interface (UI)",
        description: "Convert static designs into interactive and dynamic user interfaces. Break the UI into reusable components. Build responsive designs to ensure compatibility across desktops, tablets, and mobile devices.",
        example: "Technologies: HTML/CSS/JavaScript, TailwindCSS/Chakra UI/Shadcn UI",
        icon: Layout
    },
    {
        id: 4,
        title: "Optimizing Performance",
        description: "Ensure fast load times and smooth performance across all devices. Optimize images using formats like WebP/AVIF. Implement lazy loading for non-critical components.",
        example: "Use tools like Google Lighthouse or WebPageTest to analyze and improve performance.",
        icon: Gauge
    }
];


export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Dkhoa was a fantastic experience. He transformed our outdated website into a modern,' +
            ' user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Dkhoa’s expertise in web development is truly impressive. He delivered a robust and scalable solution' +
            ' for' +
            ' our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Dkhoa. He was able to take our complex project requirements and' +
            ' turn' +
            ' them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Dkhoa was a pleasure to work with. He understood our requirements perfectly and delivered a website that' +
            ' exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'YC-Directory',
        desc: 'YC-Directory is the ultimate platform for developers aspiring to create and launch their own startups. This comprehensive directory offers a wealth of resources, tools, and guidance designed to streamline the startup creation process. From initial idea generation to securing funding, YC-Directory provides everything you need to turn your vision into a successful venture.',
        subdesc:
            'Built as a unique Software-as-a-Service app with Next.js 15, Tailwind CSS, TypeScript, Framer Motion' +
            ' and Sentry, YC-Directory is designed for optimal performance and scalability.',
        href: 'https://yc-directory-mu-black.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Sanity',
                path: '/assets/sanity.png',
            },
        ],
    },
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://jsm-live-docs.vercel.app/sign-in',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://banking-jet.vercel.app/',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Freelance Projects',
        pos: 'Junior Front-end Developer',
        duration: '2023 - Present',
        title: "Built small-scale web applications for friends and local businesses using React.js. Focused on creating responsive interfaces, reusable components, and state management using Context API and React Hooks.",
        icon: '/assets/freelance.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'FPT University Projects',
        pos: 'React Developer - KoiNe',
        duration: '10/2024 - 11/2022',
        title: "Worked with classmates to develop web applications as part of coursework. Implemented features like dynamic routing, form validation, and API integration. Learned to collaborate using Git and GitHub effectively.",
        icon: '/assets/logo.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Self-Learning & Practice',
        pos: 'React Learner',
        duration: '2022 - Present',
        title: "Completed multiple online courses on platforms like Udemy and freeCodeCamp. Gained experience with tools like TailwindCSS, React Router, and TypeScript through building personal projects such as a Todo App and a Portfolio Website.",
        icon: '/assets/selfstudy.png',
        animation: 'salute',
    },
];