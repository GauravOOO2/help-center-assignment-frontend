"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function SearchBar({ categories, setCategoriesEvent }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [initialCategories, setInitialCategories] = useState([]);

  // Fetch all categories on initial load to display them when the search term is empty
  useEffect(() => {
    const fetchInitialCategories = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cards`);
        setInitialCategories(response.data);
        setCategoriesEvent(response.data);
      } catch (error) {
        console.error('Error fetching initial categories:', error);
      }
    };

    fetchInitialCategories();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      // If the search term is empty, reset to initial categories
      setCategoriesEvent(initialCategories);
      return;
    }

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cards/${searchTerm}`);
      
      // Ensure response.data is an array
      const data = Array.isArray(response.data) ? response.data : [response.data];
      
      if (data.length > 0) {
        setCategoriesEvent(data);
      } else {
        setCategoriesEvent([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-black w-1/2 px-4 py-2 border border-gray-300 rounded-l-md"
        />
        <button
          onClick={handleSearch}
          className="text-black px-4 py-2 bg-white border border-gray-300 rounded-r-md"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
