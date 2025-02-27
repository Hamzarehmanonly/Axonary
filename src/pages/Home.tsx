const Home: React.FC = () => {
  return (
    <>
          <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-900/30 to-black">
          {/* This layer provides the deep blue background gradient */}
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-full">
          <img 
            src="/wave-pattern.svg" 
            alt="" 
            className="w-full h-full object-cover opacity-70" 
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32 flex flex-col h-full justify-between">
        {/* Hero content */}
        <div className="mt-20 md:mt-16 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            The future belongs to those who invest in it
          </h1>
          <div className="mb-8">
            <p className="text-lg md:text-xl text-white">
              Hartmann Capital is a <span className="text-blue-400">frontier tech investment firm</span> covering Crypto, XR, Gaming, and AI.
            </p>
          </div>
          <a href="#discover" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition">
            <span className="mr-2">Discover more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;