import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import whatsapp from '../assets/whatsapp.png'
import phone from '../assets/phone-call.png'
import gmail from '../assets/gmail.png'



const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-[75%]  right-4 flex flex-col items-end z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none"
        >
          {/* Main button icon (e.g., a phone icon) */}
          <AddOutlinedIcon/>
        </button>
        <div
          className={`absolute bottom-16 right-0 flex flex-col items-center space-y-2 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="tel:+8801962160452"
            className="p-3 bg-white text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-600"
            aria-label="Call"
          >
            {/* Call icon */}
           <img src={phone} alt="" />
          </a>
          <a
            href="mailto:suadhasan2001@gmail.com"
            className="p-3 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-600"
            aria-label="Email"
          >
            {/* Email icon */}
           <img src={gmail} alt="" />
          </a>
          <a
            href="https://wa.me/8801962160452"
            className="p-3 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-700"
            aria-label="WhatsApp"
          >
            {/* WhatsApp icon */}
            <img src={whatsapp} alt="" />

          </a>
        </div>
      </div>
    </div>
  );
};

export default SpeedDial;
