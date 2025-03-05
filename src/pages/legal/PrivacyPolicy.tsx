import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us. This may include:",
      items: [
        "Name and contact information",
        "Account credentials",
        "Payment information",
        "Communication preferences",
        "Usage data and analytics"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to:",
      items: [
        "Provide and maintain our services",
        "Improve user experience",
        "Process transactions",
        "Send administrative information",
        "Respond to inquiries and support requests"
      ]
    },
    {
      title: "Information Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%."
    },
    {
      title: "Third-Party Services",
      content: "Our website may contain links to third-party websites and services. We are not responsible for the content or privacy practices of these sites and encourage you to review their privacy policies."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="text-[#5C3693]">Policy</span>
          </h1>
          <p className="text-gray-400">We are committed to protecting your privacy and ensuring the security of your personal information.</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-[#0F0A1A] rounded-xl p-6 border border-[#5C3693]/20">
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

export default PrivacyPolicy;