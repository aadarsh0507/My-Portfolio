import { motion } from "framer-motion";
import { Code, Coffee, Music, Camera } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Coding",
      description: "Building amazing web applications",
    },
    {
      icon: Coffee,
      title: "Coffee",
      description: "Fuel for late-night coding sessions",
    },
    {
      icon: Music,
      title: "Music",
      description: "Background soundtrack while working",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and memories",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "Docker",
    "AWS",
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-white text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know me better
          </p>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-semibold text-purple-600 dark:text-purple-400">
            👋 Hi there! I'm Aadarsh
          </h2>
          <p>
            A passionate{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Full-Stack Developer
            </span>{" "}
            blending creativity, problem-solving, and technical skills. With
            over 6 months of hands-on experience, I specialize in{" "}
            <span className="text-green-600 dark:text-green-400">React.js</span>
            ,{" "}
            <span className="text-green-600 dark:text-green-400">Node.js</span>,
            and backend systems like{" "}
            <span className="text-pink-600 dark:text-pink-400">
              Spring Boot
            </span>{" "}
            &{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              MongoDB
            </span>
            .
          </p>
          <p>
            🎓{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Education:
            </span>
            <br />
            Bachelor of Engineering in Agriculture Engineering – SNS College of
            Technology
            <br />
          </p>
          <p>
            💼{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Experience:
            </span>
            <br />
            Software Developer at Adhiparasakthi Hospitals
          </p>
          <p>
            🏅{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Certifications:
            </span>
            <br />
            Full-Stack Development by Credo Systemz
            <br />
            GIT Certified by Kodekloud
            <br />
            Docker Certified by Kodekloud
          </p>
          <p>
            I aim to craft applications that not only solve real-world problems
            but also offer seamless user experiences. My mission is to blend
            technology with creativity to make impactful digital products.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 mt-8 justify-center"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-purple-600 dark:bg-purple-700 text-white rounded-full shadow hover:scale-105 transition transform duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            What I Love Doing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl text-center border border-gray-300 dark:border-gray-700"
              >
                <interest.icon
                  size={40}
                  className="mx-auto mb-4 text-purple-600 dark:text-purple-400"
                />
                <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 rounded-2xl p-8 text-center shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="mb-6 text-gray-100 dark:text-gray-200">
            Open to new opportunities, exciting projects, and collaborations!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
