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

        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="menuBtn text-green-400 md:hidden"
        >
          OUR MENU
        </Link>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
