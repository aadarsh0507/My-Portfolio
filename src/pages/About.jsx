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
    "AWS"
  ];

  const learningTools = [
    "Terraform",
    "Kubernetes",
    "GitHub Actions",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "Datadog"
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-300 to-emerald-300 dark:from-green-800 dark:to-emerald-800 opacity-40 dark:opacity-20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-300 to-indigo-300 dark:from-blue-800 dark:to-indigo-800 opacity-35 dark:opacity-20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-purple-300 to-pink-300 dark:from-purple-800 dark:to-pink-800 opacity-30 dark:opacity-20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-br from-cyan-300 to-blue-300 dark:hidden opacity-25 rounded-full blur-md animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know me better
          </p>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
        >
          <h2 className="text-3xl font-semibold text-purple-600 dark:text-purple-400">
            👋 Hi there! I'm Aadarsh
          </h2>
          <p>
            A passionate <span className="text-blue-600 dark:text-blue-400 font-medium">Full-Stack Developer</span> blending creativity, problem-solving, and technical skills. With over 6 months of hands-on experience, I specialize in <span className="text-green-600 dark:text-green-400">React.js</span>, <span className="text-green-600 dark:text-green-400">Node.js</span>, and backend systems like <span className="text-pink-600 dark:text-pink-400">Spring Boot</span> & <span className="text-indigo-600 dark:text-indigo-400">MongoDB</span>.
          </p>
          <p>
            My journey began with curiosity about how digital systems work, which evolved into a strong passion for developing reliable, scalable, and high-performing web applications. Whether it's frontend design or backend logic, I enjoy turning ideas into reality through clean and maintainable code.
          </p>
          <p>
            🎓 <span className="font-semibold text-gray-900 dark:text-white">Education:</span><br />
            Bachelor of Engineering in Agriculture Engineering – SNS College of Technology
          </p>
          <p>
            💼 <span className="font-semibold text-gray-900 dark:text-white">Experience:</span><br />
            Software Developer at Adhiparasakthi Hospitals where I've built multiple in-house applications for patient management, pathology barcode printing, and doctor counseling video recording platforms.
          </p>
          <p>
            🏅 <span className="font-semibold text-gray-900 dark:text-white">Certifications:</span><br />
            Full-Stack Development by Credo Systemz<br />
            GIT Certified by Kodekloud<br />
            Docker Certified by Kodekloud<br />
            Kubernetes & Terraform (Ongoing learning)
          </p>
          <p>
            🚀 I aim to craft applications that not only solve real-world problems but also provide delightful user experiences. I am driven by a continuous learning mindset and enjoy exploring cloud infrastructure, CI/CD pipelines, and performance tuning.
          </p>
          <p>
            🧠 <span className="font-semibold text-gray-900 dark:text-white">Currently Learning:</span><br />
            {learningTools.join(", ")}
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg hover:shadow-xl text-center border border-white/20 dark:border-gray-700/20 backdrop-blur-sm bg-gradient-to-br from-white/95 to-blue-50/50 dark:from-gray-800/90 dark:to-gray-800/90"
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
