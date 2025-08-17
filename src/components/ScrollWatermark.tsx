import { useState, useEffect } from 'react';

const ScrollWatermark = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const clientHeight = window.innerHeight;
      
      const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsVisible(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className={`watermark ${isVisible ? 'visible' : ''}`}>
      <p className="text-xs text-muted-foreground">
        © Brahmpreet Singh {currentYear}
      </p>
    </div>
  );
};

export default ScrollWatermark;