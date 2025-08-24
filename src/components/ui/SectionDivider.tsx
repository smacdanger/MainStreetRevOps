import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'curve';
  className?: string;
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'wave', 
  className = '',
  flip = false 
}) => {
  const baseClasses = `w-full ${className}`;
  
  const waveD = flip 
    ? "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,101.3C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    : "M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,37.3C672,11,768,53,864,69.3C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
  
  const diagonalD = flip
    ? "M0,0L1440,160L1440,0Z"
    : "M0,160L1440,0L1440,160Z";
    
  const curveD = flip
    ? "M0,160Q720,80,1440,160L1440,0L0,0Z"
    : "M0,0Q720,80,1440,0L1440,160L0,160Z";

  const pathData = {
    wave: waveD,
    diagonal: diagonalD,
    curve: curveD
  }[variant];

  return (
    <div className={baseClasses}>
      <svg 
        viewBox="0 0 1440 320" 
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path 
          fill="currentColor" 
          d={pathData}
          className="text-slate-50"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;