import React from "react";
import profilePic from "../assets/profile-pic.jpg";

const SummarySection: React.FC = () => {
    return (
        <div className="flex flex-col items-center mb-8">
            <img
                src={profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">Tushar Aggarwal</h1>
            <p className="text-lg">New Delhi, India</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a
                    href="mailto:aggarwaltushar36@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                >
                    Mail
                </a>
                <a
                    href="https://linkedin.com/in/beingatushar/"
                    className="text-blue-400 hover:text-blue-300"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/beingatushar"
                    className="text-blue-400 hover:text-blue-300"
                >
                    GitHub
                </a>
                <a
                    href="https://leetcode.com/beingatushar/"
                    className="text-blue-400 hover:text-blue-300"
                >
                    LeetCode
                </a>
            </div>
        </div>
    );
};
const EducationSection: React.FC = () => {
    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-4 text-gray-500">Education</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <li>
                    <strong>Maharaja Agrasen Institute of Technology</strong>{" "}
                    2020 - 2024
                </li>
                <li>
                    <strong>B.Tech (Information Technology)</strong> CGPA: 8.4
                    Delhi, India
                </li>
                <li>
                    <strong>Gurusharan Convent Sr. Sec. School</strong> 2020,
                    CBSE 12th Percentage: 85% Delhi, India
                </li>
                <li>
                    <strong>Gurusharan Convent Sr. Sec. School</strong> 2018,
                    CBSE 10th Percentage: 78.4% Delhi, India
                </li>
            </ul>
        </div>
    );
};

const ExperienceSection: React.FC = () => {
    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-4 text-gray-500">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <div>
                    <strong>Pure Talk</strong>
                    <p>Front-End Developer Remote</p>
                    <p className="ml-auto">July 2023 - Aug 2023</p>
                    <ul className="list-disc list-inside">
                        <li>Migrated the web app to typescript.</li>
                        <li>Worked on UI/UX using React.js, Redux, and CSS.</li>
                    </ul>
                </div>
                <div>
                    <strong>Chegg</strong>
                    <p>Computer Science Expert Remote</p>
                    <p className="ml-auto">Mar 2022 - Sept 2022</p>
                    <ul className="list-disc list-inside">
                        <li>
                            Gave clear solutions of algorithms, Java, OOPS, and
                            React.js.
                        </li>
                        <li>
                            Helped students by making complex concepts simple.
                        </li>
                        <li>Improved my skills in Computer Fundamentals.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-4 text-gray-500">Projects</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <li>
                    <strong>Genius.AI</strong> | Next.js, Tailwind, Prisma,
                    Stripe, TypeScript | GitHub | Link Nov 2023
                    <ul className="list-disc list-inside">
                        <li>
                            Developed a responsive web application using Next.js
                            14, Stripe, Clerk, and Tailwind CSS.
                        </li>
                        <li>
                            Implemented Conversational Interface, Code
                            Generation using OpenAI API and Music, Image, and
                            Video Generation through Replicate API.
                        </li>
                        <li>
                            Implemented Image-to-Text Functionality by
                            integrating Tesseract.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Social Media App</strong> | React.js, Node.js,
                    Express.js, MongoDB | GitHub | Link Sept 2023
                    <ul className="list-disc list-inside">
                        <li>
                            Utilized React.js for the front-end, Axios for
                            server communication, and Redux for data
                            consistency.
                        </li>
                        <li>
                            Created a secure Node.js and Express.js backend
                            using MVC, with JWT for login security and Bcrypt
                            for password enhancement.
                        </li>
                        <li>
                            Implemented features like secure authentication,
                            personalized profiles, and real-time interactions
                            (comments, likes) for an engaging user experience.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

const AchievementsSection: React.FC = () => {
    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-4 text-gray-500">
                Achievements
            </h2>
            <ul className="list-disc list-inside">
                <li>
                    Achieved a top 4 rank out of 400+ participants in the IOSD
                    MAIT IMPULSE’2.0 DSA contest, showcasing strong
                    problem-solving skills.
                </li>
                <li>
                    Successfully solved 700+ problems on LeetCode and other
                    online platforms, demonstrating a commitment to continuous
                    learning.
                </li>
                <li>Completed HACKTOBERFEST’22 open-source challenge.</li>
            </ul>
        </div>
    );
};

const TechnicalSkillsSection: React.FC = () => {
    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-4 text-gray-500">
                Technical Skills
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <li>Languages: Java, HTML, CSS, JavaScript, TypeScript</li>
                <li>
                    Libraries/Frameworks: React.js, Express.js, Node.js,
                    Next.js, Tailwind CSS
                </li>
                <li>
                    Databases/Tools: MongoDB, Version Control (Git), VS Code
                </li>
                <li>
                    Computer Fundamentals: Data Structures and Algorithms,
                    Operating System, Networks, DBMS, OOPS
                </li>
            </ul>
        </div>
    );
};

const AboutPage: React.FC = () => {
    return (
        <div className=" text-white py-8 px-4 col-span-3">
            <div className="container mx-auto max-w-4xl">
                <SummarySection />
                <EducationSection />
                <ExperienceSection />
                <ProjectsSection />
                <AchievementsSection />
                <TechnicalSkillsSection />
            </div>
        </div>
    );
};

export default AboutPage;
