import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "/src/assets/profile.jpg";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 transition-colors duration-500 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Light theme background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-blue-300 to-purple-300 dark:from-purple-900 dark:to-purple-900 opacity-60 dark:opacity-30 rounded-full blur-3xl animate-pulse floating-element" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-gradient-to-br from-indigo-300 to-pink-300 dark:from-primary-900 dark:to-primary-900 opacity-50 dark:opacity-20 rounded-full blur-2xl animate-pulse floating-element" />
        <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-gradient-to-br from-pink-300 to-rose-300 dark:from-pink-900 dark:to-pink-900 opacity-45 dark:opacity-20 rounded-full blur-2xl animate-pulse floating-element" />
        
        {/* Additional light theme decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] bg-gradient-to-br from-cyan-300 to-blue-300 dark:hidden opacity-40 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[120px] h-[120px] bg-gradient-to-br from-emerald-300 to-teal-300 dark:hidden opacity-35 rounded-full blur-lg animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-3/4 right-1/3 w-[100px] h-[100px] bg-gradient-to-br from-violet-300 to-purple-300 dark:hidden opacity-35 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-2xl group-hover:scale-105 transition-transform duration-300 object-cover bg-gray-200 dark:bg-gray-800 hover:shadow-3xl"
                  style={{ 
                    boxShadow: "0 8px 32px 0 rgba(99,102,241,0.15)",
                    filter: "drop-shadow(0 10px 20px rgba(99,102,241,0.2))"
                  }}
                />
                {/* Glow effect behind the image */}
                <div className="absolute inset-0 w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              <span className="absolute bottom-2 right-2 bg-gradient-to-r from-primary-600 to-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md animate-pulse">
                👋 Hello!
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Aadarsh
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="inline-block bg-white/70 dark:bg-gray-900/60 px-4 py-2 rounded-xl shadow-sm backdrop-blur-md border border-primary-100 dark:border-primary-900">
              A results-driven{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Full-Stack Developer
              </span>{" "}
              who transforms ideas into seamless, high-performing digital
              solutions.
              <br />I thrive on building{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                scalable
              </span>
              ,{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                secure
              </span>
              , and{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">
                user-centric
              </span>{" "}
              web applications using modern technologies like{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                React
              </span>
              ,{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                Node.js
              </span>
              , and more.
              <br />
              Passionate about clean code, performance optimization, and
              delivering real business value with every line I write.
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-purple-600 hover:to-primary-600 text-white font-semibold rounded-lg transition-all shadow-xl hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              View My Work
              <ExternalLink size={20} className="ml-2" />
            </Link>

            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all shadow-lg hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              Download Resume
              <Download size={20} className="ml-2" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown size={28} className="animate-bounce" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow">
              Technologies I Love
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly learning and working with{" "}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                cutting-edge technologies
              </span>{" "}
              to build amazing experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Node.js",
              "Java",
              "Express",
              "Springboot",
              "Tailwind CSS",
              "React Bootstrap",
              "MongoDB",
              "MsSQL",
              "Docker",
              "AWS",
              "Git",
              "Github",
              "Gitlab",
              "JavaScript",
              "HTML",
              "CSS",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(99,102,241,0.2)",
                }}
                className="bg-white/90 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-primary-400 dark:hover:border-primary-600 backdrop-blur-md bg-gradient-to-br from-white/95 to-blue-50/50 dark:from-gray-800/70 dark:to-gray-800/70"
              >
                <div className="text-3xl font-extrabold text-primary-600 dark:text-primary-400 mb-2 tracking-widest drop-shadow">
                  {tech.slice(0, 2).toUpperCase()}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 dark:from-purple-950 dark:via-gray-950 dark:to-primary-950 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow">
              AI Tools I Use for Coding
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Leveraging the power of{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                AI
              </span>{" "}
              to boost productivity, write better code, and stay ahead of
              technology trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              "GitHub Copilot",
              "ChatGPT",
              "Cursor AI",
              "Trae AI",
              "Bolt AI",
              "Blackbox AI",
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(168,85,247,0.15)",
                }}
                className="flex flex-col items-center justify-center bg-white/90 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all min-h-[120px] border-2 border-transparent hover:border-purple-400 dark:hover:border-purple-600 backdrop-blur-md bg-gradient-to-br from-white/95 to-purple-50/50 dark:from-gray-800/70 dark:to-gray-800/70"
              >
                <div className="text-xl font-extrabold text-purple-600 dark:text-purple-400 mb-2 text-center tracking-wide drop-shadow">
                  {tool.split(" ")[0]}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  {tool}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
