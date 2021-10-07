import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Header = ({ handleToggleSidebar }) => {
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const history = useHistory();
  const searchHandler = () => {
    history.push(`/search/${text}`);
  };
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={handleToggleSidebar}
      />
      <img src="/images/youtube_logo.png" alt="logo" className="header__logo" />
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <AiOutlineSearch size={22} color="white" />
        </button>
      </form>
      <div className="header__icons">
        <MdApps size={28} />
        <MdNotifications size={28} />
        <img src={user?.photoURL} alt="profile pic" />
      </div>
    </div>
  );
};
export default Header;
