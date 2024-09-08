import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2">Abstract</h3>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Community</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4">&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</div>
    </footer>
  );
}

export default Footer;
