import React from "react";
import iso from "../assets/iso.png"; 
import master from "../assets/master.png"; 
import upi from "../assets/upi.png"; 
import visa from "../assets/visa.png"; 

const Footer = () => {
  return (
    <div>
    <footer className="bg-gradient-to-b from-black to-blue-900 text-white py-8">
    
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
       
        <div>
          <h5 className="font-bold text-lg mb-4">Get to know us</h5>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#terms" className="hover:text-gray-300">Terms and Conditions</a></li>
            <li><a href="#returns" className="hover:text-gray-300">Returns and Refunds</a></li>
            <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#faqs" className="hover:text-gray-300">FAQs</a></li>
          </ul>
        </div>

       
        <div>
          <h5 className="font-bold text-lg mb-4">Connect with us</h5>
          <ul className="space-y-2">
            <li><a href="#facebook" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="#twitter" className="hover:text-gray-300">Twitter</a></li>
            <li><a href="#linkedin" className="hover:text-gray-300">LinkedIn</a></li>
          </ul>
        </div>

       
        <div>
          <h5 className="font-bold text-lg mb-4">Your Account</h5>
          <ul className="space-y-2">
            <li><a href="#orders" className="hover:text-gray-300">Orders</a></li>
            <li><a href="#addresses" className="hover:text-gray-300">Addresses</a></li>
            <li><a href="#settings" className="hover:text-gray-300">Settings</a></li>
          </ul>
        </div>

        
        <div>
          <h5 className="font-bold text-lg mb-4">Contact Information</h5>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📞</span> +91 7507296868
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span> support.india@iodparts.com
            </li>
            <li>
              iodParts Technologies Limited<br />
              Office # 408, 4th Floor, Parakh Capital<br />
              Samrat Garden Road, Hadapsar, Pune,<br />
              Maharashtra, India - 411028
            </li>
          </ul>
        </div>
      </div>
    </footer>
         
          <div className="flex items-center justify-center">
          <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
       
        <div className="flex items-center space-x-4">
        <img src={iso} alt="ISO Certified" className="h-6" />
          <img src={visa} alt="Visa" className="h-6" />
          <img src={master} alt="MasterCard" className="h-6" />
          <img src={upi} alt="UPI" className="h-6" />
        </div>
        </div>
        </div>

        
        <div className="flex items-center justify-center">
        <p className="text-sm mt-7 md:mt-1 text-center md:text-right">
          Copyright © iodParts Technologies 2024
        </p>
        </div>
      
    </div>
  );
};

export default Footer;













