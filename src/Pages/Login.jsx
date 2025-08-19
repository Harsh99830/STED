import React, { useState, useEffect } from 'react';
import { SignIn, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

function Login() {
  const { user, isLoaded } = useUser();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ALLOWED_DOMAIN = '@poornima.edu.in';

  useEffect(() => {
    if (isLoaded && user) {
      const email = user.primaryEmailAddress?.emailAddress;
      if (email && !email.endsWith(ALLOWED_DOMAIN)) {
        setErrorMessage(`Only ${ALLOWED_DOMAIN} email addresses are allowed to access this platform.`);
        setShowError(true);
        // Sign out the user if they don't have the correct domain
        user.delete().catch(console.error);
      }
    }
  }, [user, isLoaded]);

  if (showError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-100 via-red-50 to-red-100 p-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center"
        >
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Restricted</h2>
            <p className="text-gray-600 mb-4">{errorMessage}</p>
            <p className="text-sm text-gray-500 mb-6">
              Please use your institutional email address to access the platform.
            </p>
            <button
              onClick={() => {
                setShowError(false);
                window.location.href = '/';
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Go Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4 relative overflow-hidden">
      {/* Professional Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h1>
        <p className="text-slate-600">Sign in to continue your learning journey</p>
      </motion.div>

      {/* Domain Restriction Notice */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg text-center max-w-md"
      >
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Only <span className="font-mono bg-blue-100 px-1 rounded">{ALLOWED_DOMAIN}</span> email addresses are allowed.
        </p>
      </motion.div>

      {/* Login Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
      >
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full opacity-50" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full opacity-50" />
        
        {/* Clerk SignIn Component Container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <SignIn 
            afterSignInUrl="/home"    
            afterSignUpUrl="/home"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
              }
            }}
          />
        </div>
      </motion.div>

      {/* Professional Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
    </div>
  );
}

export default Login;
