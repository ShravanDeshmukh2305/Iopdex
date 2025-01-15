import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const NavigationBar = () => {
  return (
    <div className="bg-blue-600 text-white">
      
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-8">
       
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span className="text-2xl font-bold tracking-wide">iodParts</span>
        </div>

       
        <div className="flex-grow mx-6 relative">
          <input
            type="text"
            placeholder="Search for Part Number/Brand/Keyword"
            className="w-full h-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none text-gray-700"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-800 p-2 rounded">
            <i className="fas fa-search text-white"></i>
          </button>
        </div>

       
        <div className="flex items-center space-x-6">
         
          <div className="relative group">
            <button className="flex items-center">
              <i className="fas fa-user-circle text-xl mr-1"></i> SIGN IN/SIGN UP
            </button>
           
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 z-10">
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Signup
              </Link>
            </div>
          </div>

          
          <Link to="/cart" className="relative">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </Link>
        </div>
      </div>

      
      <div className="bg-blue-700">
        <div className="container mx-auto flex items-center justify-between py-2 px-8">
         
          <div className="flex space-x-6 text-sm font-semibold">
            <Link to="/products" className="hover:underline">
              ALL PRODUCTS
            </Link>
            <Link to="/manufacturers" className="hover:underline">
              MANUFACTURERS
            </Link>
            <Link to="/bom-upload" className="hover:underline">
              BOM UPLOAD
            </Link>
            <Link to="/about" className="hover:underline">
              ABOUT US
            </Link>
            <Link to="/deals" className="hover:underline text-red-400">
              DEALS ⚡
            </Link>
          </div>

         
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <i className="fas fa-phone-alt mr-1"></i>
              <span>+91 7507296868</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope mr-1"></i>
              <a
                href="mailto:support.india@iodparts.com"
                className="hover:underline"
              >
                support.india@iodparts.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;












// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import logo from "../assets/logo.png"; // Replace with your logo file

// const NavigationBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedTerm, setDebouncedTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   // Debounce implementation
//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setDebouncedTerm(searchTerm);
//     }, 500); // Delay of 500ms for debounce

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [searchTerm]);

//   // Fetch search results whenever the debounced term changes
//   useEffect(() => {
//     if (debouncedTerm) {
//       const fetchSearchResults = async () => {
//         try {
//           const response = await axios.get(
//             `/api/products/search?query=${debouncedTerm}`
//           );
//           setSearchResults(response.data); // Assuming API returns a list of products
//         } catch (error) {
//           console.error("Error fetching search results:", error);
//         }
//       };
//       fetchSearchResults();
//     } else {
//       setSearchResults([]); // Clear results if search term is empty
//     }
//   }, [debouncedTerm]);

//   return (
//     <div className="bg-blue-600 text-white">
//       {/* Top Section: Logo and Search Bar */}
//       <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-8">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="h-12 w-12" />
//           <span className="text-2xl font-bold tracking-wide">iodParts</span>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-grow mx-6 relative">
//           <input
//             type="text"
//             placeholder="Search for Part Number/Brand/Keyword"
//             className="w-full h-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none text-gray-700"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-800 p-2 rounded">
//             <i className="fas fa-search text-white"></i>
//           </button>
//           {/* Display search results */}
//           {searchResults.length > 0 && (
//             <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
//               {searchResults.map((result, index) => (
//                 <Link
//                   key={index}
//                   to={`/product/${result.id}`}
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
//                 >
//                   {result.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* User and Cart Section */}
//         <div className="flex items-center space-x-6">
//           {/* Sign In/Sign Up Dropdown */}
//           <div className="relative group">
//             <button className="flex items-center">
//               <i className="fas fa-user-circle text-xl mr-1"></i> SIGN IN/SIGN UP
//             </button>
//             {/* Dropdown */}
//             <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 z-10">
//               <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
//                 Login
//               </Link>
//               <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">
//                 Signup
//               </Link>
//             </div>
//           </div>

//           {/* Cart Icon */}
//           <Link to="/cart" className="relative">
//             <i className="fas fa-shopping-cart text-xl"></i>
//             <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
//               1
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Section: Navigation Links and Contact Info */}
//       <div className="bg-blue-700">
//         <div className="container mx-auto flex items-center justify-between py-2 px-8">
//           {/* Navigation Links */}
//           <div className="flex space-x-6 text-sm font-semibold">
//             <Link to="/products" className="hover:underline">
//               ALL PRODUCTS
//             </Link>
//             <Link to="/manufacturers" className="hover:underline">
//               MANUFACTURERS
//             </Link>
//             <Link to="/bom-upload" className="hover:underline">
//               BOM UPLOAD
//             </Link>
//             <Link to="/about" className="hover:underline">
//               ABOUT US
//             </Link>
//             <Link to="/deals" className="hover:underline text-red-400">
//               DEALS ⚡
//             </Link>
//           </div>

//           {/* Contact Info */}
//           <div className="flex items-center space-x-6 text-sm">
//             <div className="flex items-center">
//               <i className="fas fa-phone-alt mr-1"></i>
//               <span>+91 7507296868</span>
//             </div>
//             <div className="flex items-center">
//               <i className="fas fa-envelope mr-1"></i>
//               <a
//                 href="mailto:support.india@iodparts.com"
//                 className="hover:underline"
//               >
//                 support.india@iodparts.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigationBar;
