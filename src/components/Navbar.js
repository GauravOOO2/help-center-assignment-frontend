"use client"
import React, { useState, useEffect } from 'react';
import RequestFormModal from './RequestFormModal';

function Navbar({ setCategoriesEvent }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-20">

          <div className="text-lg font-bold flex ">
            <img
              src="/images.png" 
              alt="Logo"
              className="h-8 w-auto pr-2" 
            />
            <span className='text-2xl	' >|</span>
            <span className='pl-2 pt-1' >Help Center  </span>
            </div>
          <button
            onClick={openModal}
            className="bg-gray-900 py-2 px-4 rounded border mt-4 md:mt-0"
          >
            Submit a request
          </button>
        </div>
      </nav>
      <RequestFormModal setCategoriesEvent={setCategoriesEvent} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navbar;
