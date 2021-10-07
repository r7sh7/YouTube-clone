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
import { useHistory } from "react-router";

const Sidebar = ({ toggleSidebar }) => {
  const component = (icon, title, clickHandler) => (
    <li onClick={clickHandler}>
      {icon}
      <span>{title}</span>
    </li>
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <nav className={toggleSidebar ? "sidebar open" : "sidebar"}>
      {component(<MdHome size={23} />, "Home", handleHomeClick)}
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
