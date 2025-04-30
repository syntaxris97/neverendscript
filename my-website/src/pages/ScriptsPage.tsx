import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ScriptGrid from '../components/ScriptGrid';
import Pagination from '../components/Pagination';
import { scriptData } from '../data/scripts';

const ITEMS_PER_PAGE = 9;

const ScriptsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter scripts based on search query
  const filteredScripts = searchQuery
    ? scriptData.filter(script => 
        script.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        script.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        script.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : scriptData;

  // Calculate pagination
  const totalPages = Math.ceil(filteredScripts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentScripts = filteredScripts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Scripts</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            {filteredScripts.length} results for "{searchQuery}"
          </h2>
          {filteredScripts.length === 0 && (
            <p className="text-gray-600 mt-2">
              No scripts found. Try a different search term.
            </p>
          )}
        </div>
      )}
      
      <ScriptGrid scripts={currentScripts} />
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ScriptsPage;