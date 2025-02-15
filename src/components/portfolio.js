const Portfolio = () => {
    const projects = [
        {
            name: "Chat Application",
            description: "A real-time chat application built with Next.js and NestJS, featuring authentication and scalable messaging.",
            image: "/images/chat-app.png", // Update with the actual image path
            githubUrl: "https://github.com/your-username/chat-app",
            liveDemo: "https://chat-app-demo.com", // Update if live demo is available
        },
        {
            name: "Portfolio Website",
            description: "A responsive portfolio showcasing my skills, projects, and experience, built using Next.js and Tailwind CSS.",
            image: "/images/portfolio.png", // Update with the actual image path
            githubUrl: "https://github.com/your-username/portfolio",
            liveDemo: "https://portfolio-demo.com", // Update if live demo is available
        },
        {
            name: "E-commerce Store",
            description: "An e-commerce platform with features like product listing, cart, and payment gateway integration.",
            image: "/images/ecommerce.png", // Update with the actual image path
            githubUrl: "https://github.com/your-username/ecommerce-store",
            liveDemo: "https://ecommerce-demo.com", // Update if live demo is available
        },
    ];

    return (
        <div className="py-10 px-4" id="portfolio">
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
                <h2 className="text-4xl font-bold text-white">My Projects</h2>
                <div className="w-1 h-12 bg-primary"></div>
            </div>

            <div className="space-y-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-transparent rounded-lg p-6"
                    >
                        {/* Image on the left */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0"
                        />

                        {/* Project details on the right */}
                        <div className="md:ml-6 flex flex-col justify-center text-left w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {project.name}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-semibold"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-semibold"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
