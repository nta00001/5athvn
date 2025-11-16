import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true); // New state for animation

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (hasVisitedBefore) {
      navigate('/home');
    } else {
      // Fade out animation starts before redirection
      const fadeDuration = 500; // milliseconds for fade out
      const totalDuration = 1000; // total duration of splash screen

      const fadeTimer = setTimeout(() => {
        setIsVisible(false); // Start fade out
      }, totalDuration - fadeDuration); // Start fading 500ms before redirection

      const redirectTimer = setTimeout(() => {
        localStorage.setItem('hasVisitedBefore', 'true');
        navigate('/home');
      }, totalDuration);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(redirectTimer);
      };
    }
  }, [navigate]);

  return (
    <div className={`flex items-center justify-center min-h-screen bg-black text-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-5xl font-bold">5ATHVN</h1>
    </div>
  );
};

export default SplashPage;