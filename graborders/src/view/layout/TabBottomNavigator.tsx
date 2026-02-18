

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/style.css";
import { i18n } from "../../i18n";


function TabBottomNavigator() {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname;

  const tabs = [
    {
      icon: "/icons/home.png",
      path: "/",
      name: i18n('pages.tabBottomNavigator.home'),
    },
    {
      icon: "/icons/search.png",
      path: "/grap",
      name: i18n('pages.tabBottomNavigator.grap'),
    },
    {
      icon: "/icons/agent.png",
      path: "/invitation",
      name: i18n('pages.tabBottomNavigator.records'),
    },
  ];

  return (
    <div className="tabbottomNavigator">
      {tabs.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{ color: "grey", textDecoration: "none" }}
        >
         
            <div className="singleTab">
              <img
                style={{ fontSize: 21 }}
                src={`${item.icon}`}
              />

            </div>
     
        </Link>
      ))}
    </div>
  );
}

export default TabBottomNavigator;