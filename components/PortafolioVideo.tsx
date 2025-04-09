import React from 'react';

interface PortfolioVideoProps {
  src: string;
}

const PortfolioVideo: React.FC<PortfolioVideoProps> = ({ src }) => {
  return (
    <div className="max-w-5xl mx-auto aspect-video relative">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="rounded-xl shadow-xl hover:opacity-70 w-full h-full object-contain"
        style={{
          maxHeight: 'calc(100vw * (9/16))', // Maintains 16:9 aspect ratio
          maxWidth: '100%'
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PortfolioVideo;