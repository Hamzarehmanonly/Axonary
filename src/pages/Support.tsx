import React from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  const supportCategories = [
    {
      title: "Email Support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Get in touch with our support team via email",
      contact: "support@wolfx.com",
      action: "mailto:support@wolfx.com"
    },
    {
      title: "Phone Support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      description: "Call us directly for immediate assistance",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      title: "Live Chat",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: "Chat with our support team in real-time",
      contact: "Available 24/7",
      action: "#chat"
    }
  ];

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Check out our Quick Start Guide in the documentation for step-by-step instructions on getting started with WOLFX."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for business accounts."
    },
    {
      question: "How can I request a feature?",
      answer: "You can submit feature requests through our support portal or contact our team directly."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How can we <span className="text-[#5C3693]">help?</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get the support you need through our various support channels. We're here to help you succeed.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supportCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#000000] rounded-xl p-6 border border-[#5C3693]/20 hover:border-[#5C3693]/50 transition-all duration-300"
            >
              <div className="text-[#5C3693] mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <p className="text-lg font-medium text-[#5C3693] mb-4">{category.contact}</p>
              <a
                href={category.action}
                className="inline-flex items-center text-white bg-[#5C3693] hover:bg-[#5C3693]/80 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Contact Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-[#000000] rounded-xl p-8 border border-[#5C3693]/20">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#5C3693]/20 pb-6">
                <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Need more detailed information?{' '}
            <Link to="/documentation" className="text-[#5C3693] hover:text-white transition-colors duration-300">
              Check our documentation
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support; 