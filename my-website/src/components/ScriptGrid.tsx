import React from 'react';
import ScriptCard, { Script } from './ScriptCard';

interface ScriptGridProps {
  scripts: Script[];
}

const ScriptGrid: React.FC<ScriptGridProps> = ({ scripts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {scripts.map((script) => (
        <ScriptCard key={script.id} script={script} />
      ))}
    </div>
  );
};

export default ScriptGrid;