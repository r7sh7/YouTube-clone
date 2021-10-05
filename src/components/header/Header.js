import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications, MdAccountCircle } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={handleToggleSidebar}
      />
      <img src="/images/youtube_logo.png" alt="logo" className="header__logo" />
      <form>
        <input type="text" placeholder="Search" />
        <button>
          <AiOutlineSearch size={22} color="white" />
        </button>
      </form>
      <div className="header__icons">
        <MdApps size={28} />
        <MdNotifications size={28} />
        <MdAccountCircle size={28} />
      </div>
    </div>
  );
};
export default Header;
