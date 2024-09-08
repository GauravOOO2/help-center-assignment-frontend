import React, { useState } from 'react';
import axios from 'axios';

function RequestFormModal({ isOpen, onClose, setCategoriesEvent }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const fetchData = async () => {
    try {
      const response = await axios.get( `${process.env.NEXT_PUBLIC_BACKEND_URL}/cards`);
      setCategoriesEvent(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cards`, {
        title,
        description,
      });

      console.log('Response:', response.data);
      alert('Request submitted successfully!');
      fetchData();

      setTitle('');
      
      setDescription('');

      onClose();
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Failed to submit the request. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Submit a Request</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestFormModal;
