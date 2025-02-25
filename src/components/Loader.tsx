{/* <AnimatePresence>
{isLoading && (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="fixed inset-0 bg-black z-50 flex items-center justify-center"
  >
    <LoadingCounter />
  </motion.div>
)}
</AnimatePresence>

const LoadingCounter = () => {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
  
    useEffect(() => {
      const duration = 10000; // 10 seconds
      const interval = 50; // Update every 50ms for smooth animation
      const steps = duration / interval;
      const increment = 100 / steps;
      let currentCount = 0;
  
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= 100) {
          setCount(100);
          setIsComplete(true);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, interval);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <motion.div
        className="fixed bottom-8 right-8 z-50 text-white font-bold"
        initial={{ opacity: 1 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl lg:text-5xl">{count}%</span>
      </motion.div>
    );
  }; */}