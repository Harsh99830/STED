import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import speaker from '../assets/Photo1.jpeg';
import mic from '../assets/Photo2.webp';
import ano from '../assets/Photo3.webp';
import speak from '../assets/Photo5.jpg';

function Start() {
  return (
    <div className="h-screen bg-white relative overflow-hidden">
      {/* University Header */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-4 relative overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0">
          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-white/10 rounded-full translate-y-8"></div>
          <div className="absolute bottom-0 right-1/3 w-20 h-20 bg-white/5 rounded-full translate-y-10"></div>
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-2 left-10 w-16 h-0.5 bg-white/20 rotate-45"></div>
            <div className="absolute top-4 right-20 w-12 h-0.5 bg-white/15 -rotate-45"></div>
            <div className="absolute bottom-3 left-1/3 w-14 h-0.5 bg-white/20 rotate-12"></div>
            <div className="absolute bottom-2 right-1/4 w-10 h-0.5 bg-white/15 -rotate-12"></div>
          </div>
          
          {/* Dots pattern */}
          <div className="absolute top-3 left-1/2 w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="absolute top-6 left-1/2 translate-x-4 w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-3 left-1/2 -translate-x-6 w-1 h-1 bg-white/25 rounded-full"></div>
          <div className="absolute bottom-5 left-1/2 translate-x-8 w-1 h-1 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="text-center relative z-10">
          <h2 className="text-white text-2xl font-bold drop-shadow-sm">
            For Poornima University Students
          </h2>
        </div>
      </div>

      {/* Background bubbles */}
      <div className="absolute top-40 right-40 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-slate-50 rounded-full opacity-30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center relative z-10"
        style={{ height: 'calc(100vh - 64px)' }}
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-start text-center lg:text-left lg:w-1/2 lg:pr-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-50 rounded-lg px-6 py-3 mb-6"
          >
            <span className="text-blue-700 font-semibold text-lg">
              Apply &gt; Memorize
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            <span className="block">Apply & Track</span>
            <span className="block text-blue-700">your <em>Learning</em></span>
          </h1>

          <p className="text-lg text-slate-600 mb-12 max-w-xl leading-relaxed">
            Learn a concept → apply it in a task → master it with projects.
          </p>

          <div className="mt-2">
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 
                          rounded-lg font-semibold text-lg shadow-lg 
                          transition-all duration-300 flex items-center group"
              >
                Start Building
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white shadow-lg rounded-lg transform rotate-3" />

            <div className="relative bg-white p-6 shadow-xl rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-4">
                {[speaker, speak, ano, mic].map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative group overflow-hidden rounded-lg shadow-md"
                  >
                    <motion.img
                      src={img}
                      alt={`Sted Skill ${index + 1}`}
                      className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
    </div>
  );
}

export default Start;