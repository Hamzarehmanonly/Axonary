import React from "react";
import { motion } from "framer-motion";

interface WorkInProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageName: string;
}

const WorkInProgressModal: React.FC<WorkInProgressModalProps> = ({
  isOpen,
  onClose,
  pageName,
}) => {
  // Debug log
  React.useEffect(() => {
    if (isOpen) {
      console.log("Modal should be visible now with page:", pageName);
    }
  }, [isOpen, pageName]);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  console.log("Rendering modal for:", pageName);

  // The modal wrapper - positioned over everything
  return (
    <div 
      id="modal-container" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 9999999
      }}
    >
      {/* Backdrop - full screen overlay */}
      <div 
        onClick={onClose}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.7)', 
          backdropFilter: 'blur(8px)'
        }}
      />

      {/* Modal content */}
      <div
        style={{ 
          position: 'relative', 
          width: '90%', 
          maxWidth: '450px', 
          backgroundColor: '#13111C',
          border: '2px solid rgba(124, 58, 237, 0.5)',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.25)',
          zIndex: 10000000
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '16px', 
            right: '16px', 
            color: '#9ca3af',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Working animation SVG */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: '#8b5cf6' }}
          >
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />

            <motion.circle
              cx="60"
              cy="60"
              r="30"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />

            <motion.path
              d="M60 30L60 60L75 75"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
              }}
            />
          </svg>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
            {pageName} Coming Soon
          </h2>
          <p style={{ color: '#d1d5db', marginBottom: '24px' }}>
            This page is currently under construction. Our team is working
            hard to bring you an amazing experience soon!
          </p>

          <button
            onClick={onClose}
            className="btn-primary"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: '#5C3693', 
              color: 'white', 
              padding: '8px 24px', 
              borderRadius: '8px', 
              fontWeight: '500',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgressModal; 