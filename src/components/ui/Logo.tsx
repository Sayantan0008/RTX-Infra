import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-16 h-12',
    md: 'w-24 h-18',
    lg: 'w-32 h-24',
    xl: 'w-40 h-30'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background */}
          <rect width="80" height="60" rx="8" fill="#1a1a1a" stroke="#c4b689" stroke-width="1.5"/>
          
          {/* RTX Text */}
          <text x="40" y="25" font-family="Arial, sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#c4b689">RTX</text>
          
          {/* Building Icon */}
          <rect x="25" y="30" width="12" height="18" fill="#c4b689" rx="1"/>
          <polygon points="25,30 31,24 37,30" fill="#c4b689"/>
          
          {/* Antenna */}
          <line x1="31" y1="24" x2="31" y2="18" stroke="#c4b689" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="31" cy="18" r="1.5" fill="#c4b689"/>
        </svg>
      </div>
      
      {/* Company Name Text */}
      {showText && (
        <div className="ml-3 hidden sm:block">
          <div className="text-lg font-bold text-white">RTX</div>
          <div className="text-xs text-gray-400 font-medium">INFRASTRUCTURE</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
