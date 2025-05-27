import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description, expanded, toggleDescription }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative p-[2px] rounded-xl bg-gradient-to-br from-[#1e3a8a] via-[#9333ea] to-[#db2777] shadow-lg hover:shadow-2xl transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-full border border-[#9333ea]">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {expanded ? description : `${description.substring(0, 150)}...`}
        </p>
        <button
          onClick={toggleDescription}
          className="inline-block px-5 py-2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
        <button
          onClick={() => navigate('/projects')}
          className="inline-block px-5 py-2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ml-4"
        >
          🔍 View Projects
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;