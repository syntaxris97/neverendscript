import React, { useState } from 'react';

const ExecutePage: React.FC = () => {
  const [code, setCode] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  const handleExecute = () => {
    if (!code.trim()) return;
    
    setIsExecuting(true);
    setResult(null);
    
    // Simulate execution (this is just for UI demonstration)
    setTimeout(() => {
      setIsExecuting(false);
      setResult('Script executed successfully!');
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Execute Script</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-6">
          Paste your script below and click "Execute" to run it. Make sure your executor is open and ready.
        </p>
        
        <div className="mb-4">
          <label htmlFor="script" className="block text-sm font-medium text-gray-700 mb-2">
            Script
          </label>
          <textarea
            id="script"
            rows={10}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Paste your script here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleExecute}
            disabled={isExecuting || !code.trim()}
            className={`px-4 py-2 rounded-md font-medium flex items-center justify-center ${
              isExecuting || !code.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isExecuting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Executing...
              </>
            ) : (
              'Execute Script'
            )}
          </button>
          
          <button
            onClick={() => setCode('')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
          >
            Clear
          </button>
        </div>
        
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutePage;