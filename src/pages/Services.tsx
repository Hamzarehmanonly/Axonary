import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Globe, Server, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Solutions']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive interfaces that engage users and drive conversions through data-driven design decisions.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design']
    },
    {
      icon: Rocket,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to boost your online presence and reach your target audience effectively.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media Marketing']
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies that align with your business goals and drive sustainable growth.',
      features: ['Market Analysis', 'Competitive Research', 'Growth Planning']
    },
    {
      icon: Server,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and solutions that ensure your applications perform at their best.',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance']
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-purple-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900 transition-all duration-300 group"
              >
                <service.icon className="w-12 h-12 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;