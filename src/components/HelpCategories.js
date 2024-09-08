"use client"

import React, { useEffect } from 'react';
import axios from 'axios';

function HelpCategories({ categories, setCategoriesEvent }) {
  console.log("categories", categories);

  useEffect(() => {
    console.log('useEffect called');
  
    const fetchData = async () => {
      console.log('Fetching data');
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cards`);
        console.log('Data fetched:', response.data);
        setCategoriesEvent(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);  // Removed setCategoriesEvent from dependency array
  

  return (
    <div className="w-2/3 container mx-auto py-12 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-min" style={{ alignItems: 'start' }}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-100 hover:shadow-lg transition-shadow flex flex-col"
            style={{ alignSelf: 'start' }}
          >
            <h3 className="font-semibold text-xl mb-2 text-black border-b-2 border-gray-300 pb-1">
              {category.title}
            </h3>
            <p className="text-gray-600 break-words">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpCategories;
