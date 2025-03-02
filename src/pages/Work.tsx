import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Work: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "UI UX CX Design",
      description: "Creating intuitive and engaging user experiences that drive conversion and delight customers.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Website Development",
      description: "Building high-performance, responsive websites that represent your brand perfectly.",
      icon: "🖥️"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Crafting native and cross-platform applications that users love.",
      icon: "📱"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Driving growth through strategic campaigns across multiple digital channels.",
      icon: "📈"
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Implementing scalable, secure cloud infrastructure for your business needs.",
      icon: "☁️"
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Leveraging cutting-edge AI technology to solve complex business problems.",
      icon: "🤖"
    },
    {
      id: 7,
      title: "Blockchain",
      description: "Building secure, transparent blockchain solutions for various industries.",
      icon: "🔗"
    }
  ];

  // Automatically cycle through services for animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => {
        if (prev === null || prev >= services.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const serviceVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into digital reality with cutting-edge solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={serviceVariants}
              whileHover="hover"
              className={`rounded-xl p-8 backdrop-blur-md ${
                activeService === service.id 
                  ? 'bg-gradient-to-br from-blue-900/70 to-purple-900/70 border border-blue-500'
                  : 'bg-white/5 border border-white/10'
              } transition-all duration-300`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activeService === service.id ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
                className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 mt-4"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            Explore Our Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;