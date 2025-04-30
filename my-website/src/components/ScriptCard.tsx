import React from 'react';
import { Link } from 'react-router-dom';

export interface Script {
  id: string;
  title: string;
  image: string;
  date: string;
  credits: string;
  description: string;
  category: string;
}

interface ScriptCardProps {
  script: Script;
}

const ScriptCard: React.FC<ScriptCardProps> = ({ script }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
      <Link to={`/script/${script.id}`}>
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={script.image}
            alt={script.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white font-semibold text-lg truncate">{script.title}</h3>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">{script.date}</div>
        <p className="text-sm text-gray-700 line-clamp-2 mb-3">
          {script.description}
        </p>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Credit:</span> {script.credits}
        </div>
      </div>
    </div>
  );
};

export default ScriptCard;