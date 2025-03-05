import React from 'react';

const TermsConditions: React.FC = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.",
      items: [
        "This is the grant of a license, not a transfer of title",
        "You may not modify or copy the materials",
        "You may not use the materials for any commercial purpose",
        "You may not attempt to decompile or reverse engineer any software",
        "Your license shall automatically terminate if you violate any of these restrictions"
      ]
    },
    {
      title: "Disclaimer",
      content: "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:",
      items: [
        "Implied warranties of merchantability",
        "Fitness for a particular purpose",
        "Non-infringement of intellectual property",
        "Accuracy, reliability, and availability of the materials"
      ]
    },
    {
      title: "Limitations",
      content: "In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our materials."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & <span className="text-[#5C3693]">Conditions</span>
          </h1>
          <p className="text-gray-400">Please read these terms and conditions carefully before using our services.</p>
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

export default TermsConditions;