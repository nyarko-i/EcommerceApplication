import PropTypes from "prop-types";
import { CiHome } from "react-icons/ci";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiOutlineBars4 } from "react-icons/hi2";
import { useState } from "react";

function Sidebar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <CiHome />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <MdOutlineLibraryBooks />,
    },
    {
      path: "/products",
      name: "Products",
      icon: <FiShoppingBag />,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <IoPersonCircleOutline />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <BiMessageSquareDetail />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
  ];

  return (
    <div className="flex">
      <div className="bg-white text-darkBlack h-screen p-4 md:shadow-lg w-42 ">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold hidden md:block">
            <span className="text-blue">Big</span>{" "}
            <span className="text-lightGreen">Bazzar</span>
          </h1>
          {/* Hamburger menu icon */}
          <HiOutlineBars4
            className="  cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </div>
        {/* Menu items */}
        <div className={`md:block ${isMenuOpen ? "block" : "hidden"}  `}>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center p-2 mb-2 rounded hover:bg-blue hover:text-white "
            >
              <div className="mr-4">{item.icon}</div>
              <div>{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
