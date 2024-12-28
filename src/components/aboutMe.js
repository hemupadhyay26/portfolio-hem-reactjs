import hero2 from '../assets/hero2.jpeg';
const AboutMe = () => {
    return (
        <div className="flex flex-col items-center py-10 space-y-6">
            {/* Title */}
            <div className="font-bold text-3xl text-white">Who am I?</div>

            {/* Vertical Line */}
            <div className="w-1 h-16 bg-primary"></div>

            {/* Description */}
            <div className="flex flex-col md:flex-row items-center justify-between space-x-6 space-y-2 md:space-y-0">
                {/* Left Box */}
                <div className="flex-1 flex justify-center">
                    <div className="relative">
                        <img
                            src={hero2} // Placeholder for the image
                            alt="About Me"
                            className="border-4 border-primary shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Box */}
                <div className="flex-1 text-center md:text-left space-y-4">
                    <h3 className="text-xl font-bold text-primary">About Me</h3>
                    <h4 className="text-3xl text-white font-bold">Hem Chandra Upadhyay Details</h4>
                    <div className="text-secondary w-80">I'm Hem Chandra Upadhyay, a Computer Science graduate skilled in data structures, algorithms, AWS Cloud, and DevOps. I've developed various projects and am proficient in C++, Bash, Git, JavaScript, SQL, and frameworks like ReactJS, React Native, and NodeJS.</div>

                    {/* Cards with Name and Other Details */}
                    <div className="space-y-4">
                        <div className="bg-box p-4 rounded-lg shadow-md border-l-4 border-primary">
                            <h5 className="font-semibold text-lg text-primary">Name:</h5>
                            <p className="text-secondary">Hem Chandra Upadhyay</p>
                        </div>
                        <div className="bg-box p-4 rounded-lg shadow-md border-l-4 border-primary">
                            <h5 className="font-semibold text-lg text-primary">Email:</h5>
                            <p className="text-secondary">hemupadhyay234@gmail.com</p>
                        </div>
                        <div className="bg-box p-4 rounded-lg shadow-md border-l-4 border-primary">
                            <h5 className="font-semibold text-lg text-primary">Location:</h5>
                            <p className="text-secondary">Uttarakhand, India</p>
                        </div>
                    </div>
                    
                    <a
                        href="#"
                        className="hidden md:inline-block bg-primary text-box py-3 px-6 rounded-md text-lg transition duration-300 border-2 border-primary hover:bg-background hover:text-primary"
                    >
                        Download Resume
                    </a>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
