import React from 'react';

interface MiniProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({ imagePath, title, description }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 m-4 w-80 text-center">
      <img src={imagePath} alt={title} className="w-full h-52 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default MiniProjectCard;
