import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="my-6">
      <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search Roblox scripts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200 flex items-center justify-center"
        >
          <span className="hidden sm:inline-block mr-2">Search</span>
          <Search size={18} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;