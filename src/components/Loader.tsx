import React, { useEffect, useState, useRef } from 'react';

interface ServiceItemProps {
  entryDelay: number;
  exitDelay: number;
  onExit?: () => void;
  isExiting: boolean;
}

type TimeoutId = ReturnType<typeof setTimeout>;

const ServiceItem: React.FC<ServiceItemProps> = ({ entryDelay, exitDelay, onExit, isExiting }) => {
  const [position, setPosition] = useState<'hidden-bottom' | 'visible' | 'hidden-top'>('hidden-bottom');
  const [isItemExiting, setIsItemExiting] = useState(false);
  const timersRef = useRef<TimeoutId[]>([]);
  
  useEffect(() => {
    const timers: TimeoutId[] = [];
    
    if (!isExiting) {
      const appearTimer = setTimeout(() => {
        setPosition('visible');
      }, entryDelay);
      timers.push(appearTimer);
      
      const disappearTimer = setTimeout(() => {
        setIsItemExiting(true);
        const topTimer = setTimeout(() => {
          setPosition('hidden-top');
          if (onExit) {
            const exitTimer = setTimeout(() => {
              onExit();
            }, 500);
            timers.push(exitTimer);
          }
        }, 100);
        timers.push(topTimer);
      }, exitDelay);
      timers.push(disappearTimer);
      
      timersRef.current = timers;
    }
    
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
    };
  }, [entryDelay, exitDelay, onExit, isExiting]);
  
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <h1
        className={`uppercase font-black tracking-tighter leading-none m-0 transition-all duration-500 ease-out select-none whitespace-nowrap
          ${position === 'hidden-bottom' ? 'translate-y-full opacity-0' : ''}
          ${position === 'hidden-top' ? '-translate-y-full opacity-0' : ''}
          ${isItemExiting || isExiting ? 'text-black' : 'text-white'}`}
        style={{
          fontFamily: "'Impact', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
          fontSize: 'min(25vw, 15vh)',
          lineHeight: '0.9',
          letterSpacing: '-0.02em'
        }}
      >
        SERVICES
      </h1>
    </div>
  );
};

const ServicesLoader: React.FC<{ onFinished?: () => void }> = ({ onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const completedExitsRef = useRef(0);
  const timersRef = useRef<TimeoutId[]>([]);
  const isUnmountedRef = useRef(false);
  
  useEffect(() => {
    // Set initial mobile state after component mount
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      if (!isExiting && !isUnmountedRef.current) {
        setIsMobile(window.innerWidth < 768);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      isUnmountedRef.current = true;
      window.removeEventListener('resize', handleResize);
    };
  }, [isExiting]);
  
  const gridConfig = {
    columns: isMobile ? 1 : 3,
    rows: isMobile ? 8 : 8
  };
  
  const totalItems = gridConfig.columns * gridConfig.rows;
  
  // Generate entry delays between 0ms and 800ms
  const getRandomEntryDelay = () => Math.random() * 800;
  
  // Generate exit delays between 3000ms and 3800ms
  const getRandomExitDelay = () => 3000 + (Math.random() * 800);
  
  const entryDelays = useRef(Array.from({ length: totalItems }, getRandomEntryDelay));
  const exitDelays = useRef(Array.from({ length: totalItems }, getRandomExitDelay));
  
  // Total animation duration set to 5000ms (5 seconds)
  const maxExitDelay = 5000;
  
  useEffect(() => {
    const startExit = () => {
      if (!isUnmountedRef.current) {
        setIsExiting(true);
        setExitAnimation(true);
        
        const visibilityTimer = setTimeout(() => {
          if (!isUnmountedRef.current) {
            setIsVisible(false);
            if (onFinished) onFinished();
          }
        }, 800);
        
        timersRef.current.push(visibilityTimer);
      }
    };

    const fullExitTimer = setTimeout(startExit, maxExitDelay - 800);
    timersRef.current.push(fullExitTimer);
    
    return () => {
      isUnmountedRef.current = true;
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
    };
  }, [maxExitDelay, onFinished]);
  
  const handleItemExit = () => {
    if (isExiting || isUnmountedRef.current) return;
    
    completedExitsRef.current += 1;
    if (completedExitsRef.current === totalItems) {
      setIsExiting(true);
      setExitAnimation(true);
      
      const finalTimer = setTimeout(() => {
        if (!isUnmountedRef.current) {
          setIsVisible(false);
          if (onFinished) onFinished();
        }
      }, 800);
      
      timersRef.current.push(finalTimer);
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] overflow-hidden transition-all transform duration-[800ms] ease-out`}
      style={{ 
        width: '100vw', 
        height: '100vh',
        position: 'fixed',
        top: exitAnimation ? '-100%' : '0',
        left: 0,
        willChange: 'transform',
        transition: 'top 0.8s cubic-bezier(0.65, 0, 0.35, 1)'
      }}
    >
      <div
        className="grid w-full h-full place-items-center overflow-hidden absolute inset-0"
        style={{
          gridTemplateColumns: `repeat(${gridConfig.columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridConfig.rows}, minmax(0, 1fr))`,
          gap: isMobile ? '0.5vh' : '0.25vh',
          padding: isMobile ? '2vh 0' : '1vh 0',
          position: 'absolute',
          top: exitAnimation ? '-100%' : '0',
          left: 0,
          willChange: 'transform',
          transition: 'top 0.8s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      >
        {Array.from({ length: totalItems }).map((_, index) => (
          <div key={`item-${index}`} className="flex justify-center items-center overflow-hidden w-full h-full">
            <ServiceItem
              entryDelay={entryDelays.current[index]}
              exitDelay={exitDelays.current[index]}
              onExit={handleItemExit}
              isExiting={exitAnimation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLoader;