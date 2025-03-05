import React from 'react';

const CookiePolicy: React.FC = () => {
  const sections = [
    {
      title: "What Are Cookies",
      content: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience."
    },
    {
      title: "How We Use Cookies",
      content: "We use cookies for the following purposes:",
      items: [
        "To provide essential website functionality",
        "To remember your preferences",
        "To analyze and improve our website performance",
        "To deliver personalized content and advertising",
        "To enable social media integration"
      ]
    },
    {
      title: "Types of Cookies We Use",
      content: "Our website uses the following types of cookies:",
      items: [
        "Essential cookies: Required for basic website functionality",
        "Preference cookies: Remember your settings and preferences",
        "Analytics cookies: Help us understand how visitors use our site",
        "Marketing cookies: Used to deliver relevant advertisements",
        "Social media cookies: Enable social sharing and tracking"
      ]
    },
    {
      title: "Managing Cookies",
      content: "Most web browsers allow you to control cookies through their settings. You can:",
      items: [
        "View cookies stored on your computer",
        "Block or allow cookies",
        "Delete existing cookies",
        "Set preferences for certain websites"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cookie <span className="text-[#5C3693]">Policy</span>
          </h1>
          <p className="text-gray-400">Learn about how we use cookies to enhance your browsing experience.</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-[#000000] rounded-xl p-6 border border-[#5C3693]/20">
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-gray-400 mb-4">{section.content}</p>
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 flex items-start">
                      <span className="text-[#5C3693] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="text-sm text-gray-500 text-center pt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;