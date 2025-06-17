import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const demoProjects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      id: "2",
      title: "Todo List App",
      description:
        "A simple and elegant todo app built with React. Manage your daily tasks efficiently.",
      image: "/todo-list.PNG",
      techStack: ["React", "CSS"],
      category: "frontend",
      liveUrl: "https://todo-0507.netlify.app/",
      githubUrl: "https://github.com/aadarsh0507/Todo-App.git",
      featured: false,
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description:
        "A sleek and responsive weather forecasting application built using React.js and the OpenWeather API.",
      image: "/weather-app.PNG",
      techStack: ["React", "OpenWeather API"],
      category: "frontend",
      liveUrl: "https://weather-app0507.netlify.app/",
      githubUrl: "https://github.com/aadarsh0507/weather-app.git",
      featured: true,
    },
    {
      id: "4",
      title: "Bliss-site",
      description:
        "I developed a modern, responsive front-end for BLISS Skillful Care, the simulation training division of Adhiparasakthi Hospitals, using React.js. The website is designed to showcase the hospitals simulation lab facilities, healthcare courses, departments, and expert medical staff.It allows students and professionals to explore training programs, get informed about services, and apply online with ease",
      image: "/bliss-site.PNG",
      techStack: ["React", "Tailwind CSS"],
      category: "frontend",
      liveUrl: "https://bliss-site.netlify.app",
      githubUrl: "https://github.com/aadarsh0507/blisss.git",
      featured: false,
    },
    {
      id: "5",
      title: "EYE-Camp",
      description:
        "A complete web application designed for managing hospital health camps, including patient registration, data storage, and OP card printing. Built with a full stack architecture, this system simplifies the process of onboarding patients, maintaining visit history, and generating printable OP cards instantly after registration.",
      image: "/eye-camp.PNG",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      liveUrl: "https://eye-camp.netlify.app",
      frontendUrl: "https://github.com/aadarsh0507/eyecamp-frontend.git",
      backendUrl: "https://github.com/aadarsh0507/eyecamp-backend.git",
      featured: false,
    },
    {
      id: "6",
      title: "Pathalogy Barcode",
      description:
        "A full-stack web application built for pathology labs to efficiently generate barcode labels for patient samples. The system is integrated with a third-party Hospital Information System (HIS) using MS SQL to fetch real-time patient data using their UHID (Unique Hospital ID).",
      image: "/path-label.PNG",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "https://pathologylabel.netlify.app/",
      githubUrl: "https://github.com/aadarsh0507/pathology.git",
      featured: false,
    },
    {
      id: "7",
      title: "Consultation-video recorder",
      description:
        "A secure and intuitive video recording web application designed for medical counselors and doctors to record patient consultations. Doctors can log in using their credentials and initiate or review recorded sessions for quality assurance and follow-up tracking.",
      image: "/consultation-app.PNG",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      liveUrl: "https://consultationapp.netlify.app/doctor-login",
      frontendUrl: "https://github.com/aadarsh0507/consultation-frontend.git",
      backendUrl: "https://github.com/aadarsh0507/consultation-backend.git",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? demoProjects
      : demoProjects.filter((project) => project.category === filter);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium shadow transition-colors border-2 ${
                filter === category.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent scale-105"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-purple-100 dark:hover:bg-purple-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-purple-900 dark:to-blue-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium border border-purple-200 dark:border-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                    >
                      <Eye size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
