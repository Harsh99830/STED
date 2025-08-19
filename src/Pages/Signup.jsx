import React, { useState, useEffect } from 'react';
import { SignUp, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

function Signup() {
  const { user, isLoaded } = useUser();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ALLOWED_DOMAIN = '@poornima.edu.in';

  useEffect(() => {
    if (isLoaded && user) {
      const email = user.primaryEmailAddress?.emailAddress;
      if (email && !email.endsWith(ALLOWED_DOMAIN)) {
        setErrorMessage(`Only ${ALLOWED_DOMAIN} email addresses are allowed to register.`);
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
              Please use your institutional email address to register.
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/30 p-8 rounded-3xl shadow-2xl max-w-md w-full flex flex-col items-center justify-center"
        style={{ minHeight: '400px' }}
      >
        {/* Domain Restriction Notice */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Only <span className="font-mono bg-blue-100 px-1 rounded">{ALLOWED_DOMAIN}</span> email addresses are allowed to register.
          </p>
        </div>
        
        <div className="w-full flex items-center justify-center">
          <SignUp 
            afterSignUpUrl="/home"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
                card: 'shadow-none bg-transparent',
              }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;
