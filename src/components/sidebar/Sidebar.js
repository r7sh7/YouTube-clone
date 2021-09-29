import React from "react";
import "./_sidebar.scss";
import {
  MdHome,
  MdSubscriptions,
  MdThumbUp,
  MdExplore,
  MdHistory,
  MdExitToApp,
} from "react-icons/md";

const Sidebar = ({ toggleSidebar, handleToggleSidebar }) => {
  const component = (icon, title) => (
    <li>
      {icon}
      <span>{title}</span>
    </li>
  );
  return (
    <nav className={toggleSidebar ? "sidebar open" : "sidebar"}>
      {component(<MdHome size={23} />, "Home")}
      {component(<MdSubscriptions size={23} />, "Subscriptions")}
      {component(<MdThumbUp size={23} />, "Liked")}
      {component(<MdExplore size={23} />, "Explore")}
      {component(<MdHistory size={23} />, "History")}
      <hr />
      {component(<MdExitToApp size={23} />, "Log out")}
      <hr />
    </nav>
  );
};

export default Sidebar;
