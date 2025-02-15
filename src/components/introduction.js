import DynamicTextAnimation from "./dynamicTextAnimation";
import heroImage from "../assets/hero.png";

const Introduction = () => {
    return (
        <div className="px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left side */}
                <div className="flex-1 text-center md:text-left order-1 md:order-1">
                    <h2 className="text-4xl md:text-7xl font-bold text-white my-4">Hello.</h2>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">╴I’m <DynamicTextAnimation /></h3>
                    <p className="text-lg md:text-xl text-white mb-4">Professional Graphics Designer</p>
                    <a
                        href="#"
                        className="hidden md:inline-block bg-primary text-box py-3 px-6 rounded-md text-lg transition duration-300 border-2 border-primary hover:bg-background hover:text-primary"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Right side */}
                <div className="flex-1 text-center md:text-left order-2 md:order-3">
                    <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">I am a DevOps engineer</h4>
                    <p className="text-base md:text-lg text-secondary mb-6">
                        I'm Hem Chandra Upadhyay, a Computer Science graduate skilled in data structures, algorithms, AWS Cloud, and DevOps. I've developed various projects and am proficient in C++, Bash, Git, JavaScript, SQL, and frameworks like ReactJS, React Native, and NodeJS.
                    </p>
                    <a
                        href="#"
                        className="group text-primary font-bold text-lg md:text-xl flex items-center justify-center md:justify-start transition-all duration-300 hover:text-secondary"
                    >
                        Let’s Talk
                        <span className="ml-2 text-xl md:text-2xl transform transition-all duration-300 group-hover:translate-x-2">
                            &#8594;
                        </span>
                    </a>
                </div>

                {/* Middle Image */}
                <div className="flex order-3 md:order-2">
                    <img
                        src={heroImage}
                        alt="hem upadhyay"
                        className="w-full max-w-xs md:max-w-md h-auto mx-auto shadow-lg object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default Introduction;
