import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Co_Working from "../assets/media/Co_Working.mp4";
import RGrecords from "../assets/media/RG_Records.mp4";

// Project Data
const projects = [
  {
    id: 1,
    title: "Co-Working Hybrid App",
    description:
      "A hybrid mobile application with two types of users: Normal Users and Property Owners. Normal users can book co-working spaces, while owners can register their properties with rent, facilities, and photos. Includes test-mode payment gateway and multiple screens like Welcome, User Selection, Signup, Login, Dashboards for both roles, Sidebar & Bottom Tab Navigation, Booking, Upcoming/Completed/Cancelled screens, KYC, Profile, Notifications, FAQs, Privacy Policy, and more.",
    video: Co_Working,
    images: [
      "https://source.unsplash.com/400x300/?office,workspace",
      "https://source.unsplash.com/400x300/?coworking,building",
    ],
    liveDemo: "https://yourprojectlink.com",
    repo: "https://github.com/yourrepo",
  },
  {
    id: 2,
    title: "RGRecords - Music Contest App",
    description:
      "RGRecords is a real-world hybrid mobile app with two user types: Normal Users who participate in music contests and Event Owners who publish contest details including fee and venue. App includes screens like Welcome, User Selection, Signup/Login, Dashboard, Bottom Tab Navigation, Notifications, Profile, Event Details, Contest Registration, Personal Details, Education, Professional Info, Post Registration Summary, and Payment Gateway integration.",
    video: RGrecords,
    images: [
      "https://source.unsplash.com/400x300/?music,stage",
      "https://source.unsplash.com/400x300/?concert,mic",
    ],
    liveDemo: "https://yourprojectlink.com",
    repo: "https://github.com/yourrepo",
  },
];

// ReadMore Component
const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const previewText = text.length > 150 ? text.slice(0, 150) + "..." : text;

  return (
    <div className="mt-2 text-gray-200">
      <p>{isExpanded ? text : previewText}</p>
      {text.length > 150 && (
        <button
          onClick={toggleReadMore}
          className="mt-1 text-yellow-300 font-semibold hover:underline hover:text-yellow-500"
        >
          {isExpanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      )}
    </div>
  );
};

// VideoPlayer Component
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = document.fullscreenElement === videoRef.current;
      setIsFullscreen(isFull);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="mt-4 w-full h-[200px] overflow-hidden rounded-lg shadow-md border-2 border-[#2C5364]">
      <video
        ref={videoRef}
        controls
        className="w-full h-full rounded-lg"
        style={{
          objectFit: isFullscreen ? "contain" : "cover",
          backgroundColor: "black",
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Projects Component
const Projects = () => {
  return (
    <div className="w-full min-h-screen px-6 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg"
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tl hover:from-[#2C5364] hover:via-[#203A43] hover:to-[#0F2027] border border-[#2C5364]"
          >
            <h3 className="text-2xl font-semibold text-yellow-300">{project.title}</h3>

            {/* ReadMore for Project Description */}
            <ReadMore text={project.description} />

            {/* Video Player */}
            <VideoPlayer src={project.video} />

            {/* Project Links */}
            <div className="mt-4 flex justify-between">
              <a
                href={project.liveDemo}
                target="_blank"
                className="text-yellow-300 font-semibold hover:underline hover:text-yellow-500"
              >
                🌍 Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="text-yellow-300 font-semibold hover:underline hover:text-yellow-500"
              >
                🔗 GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;