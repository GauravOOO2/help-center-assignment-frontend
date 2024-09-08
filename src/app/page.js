"use client"
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import HelpCategories from '../components/HelpCategories';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const setCategoriesEvent = (e) =>{
    setCategories(e)
  }
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar setCategoriesEvent={setCategoriesEvent} />
      <div className="flex-grow">
        <div style={{ backgroundColor: 'rgba(218, 219, 240, 1)' }} className=" text-center py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">How can we help?</h1>
          <SearchBar 
          categories={categories}
            setCategoriesEvent={setCategoriesEvent}
          />
        </div>
        <HelpCategories 
          categories={categories}
          setCategoriesEvent={setCategoriesEvent}
        />
      </div>
      <Footer />
    </div>
  );
}
