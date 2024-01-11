import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarLinks } from "./Data";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-black w-full">
      <div className="logo text-green-400 hover:text-red-500 font-extrabold text-4xl md:text-6xl font-Primary ">
        Trendy
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links text-green-400 font-Primary text-3xl ">
          {navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <div>
          <Link
            className="text-green-400 hover:text-white text-3xl mx-2"
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link
            className="text-green-400 hover:text-white text-3xl mx-2"
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-user"></i>{" "}
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";

// export default function Trendy() {
//   const [activeLink, setActiveLink] = useState("home");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };
//   return (
//     <>
//       <div>
//         <nav className="bg-black p-4 font-Primary ">
//           <div className="container mx-auto flex justify-between items-center">
//             <div className="text-green-400 hover:text-red-500 font-extrabold text-4xl md:text-6xl ">
//               Trendy
//             </div>
//             <div className="hidden md:flex space-x-4 ">
//               <a
//                 href="/"
//                 className={`text-green-400 hover:text-green-100 text-3xl mx-2 ${
//                   activeLink === "home" ? "text-red-500" : ""
//                 }`}
//               >
//                 Home
//               </a>
//               <a
//                 href="/#"
//                 className={`text-green-400 hover:text-green-100 text-3xl mx-2${
//                   activeLink === "shop" ? "text-red-500" : ""
//                 }`}
//               >
//                 Shop
//               </a>
//               <div className="group relative">
//                 <a
//                   href="/#"
//                   className={`text-green-400 hover:text-green-100 text-3xl mx-2 ${
//                     activeLink === "DOD" ? "text-red-500" : ""
//                   }`}
//                 >
//                   D<span className="text-xl">eal Of </span>T
//                   <span className="text-xl">he</span> D
//                   <span className="text-xl">ay</span>
//                 </a>
//               </div>
//               <a
//                 href="/#"
//                 className={`text-green-400 hover:text-green-100 text-3xl mx-2 ${
//                   activeLink === "contact" ? "border-b-2 border-green-400" : ""
//                 }`}
//                 onClick={() => handleLinkClick("contact")}
//               >
//                 Trending
//               </a>
//               <a
//                 className="text-green-400 hover:text-green-100 text-3xl mx-2"
//                 href="/#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i class="fa-solid fa-cart-shopping"></i>
//               </a>
//               <a
//                 className="text-green-400 hover:text-green-100 text-3xl mx-2"
//                 href="/#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i class="fa-solid fa-user"></i>{" "}
//               </a>
//             </div>
//             <button className="md:hidden text-green-400 hover:text-green-100 focus:outline-none">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }
