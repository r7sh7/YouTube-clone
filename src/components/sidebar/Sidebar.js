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
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";

const Sidebar = ({ toggleSidebar }) => {
  const component = (icon, title, clickHandler) => (
    <li onClick={clickHandler}>
      {icon}
      <span>{title}</span>
    </li>
  );

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className={toggleSidebar ? "sidebar open" : "sidebar"}>
      {component(<MdHome size={23} />, "Home")}
      {component(<MdSubscriptions size={23} />, "Subscriptions")}
      {component(<MdThumbUp size={23} />, "Liked")}
      {component(<MdExplore size={23} />, "Explore")}
      {component(<MdHistory size={23} />, "History")}
      <hr />
      {component(<MdExitToApp size={23} />, "Log out", logoutHandler)}
      <hr />
    </nav>
  );
};

export default Sidebar;
