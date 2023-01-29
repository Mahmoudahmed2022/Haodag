import React from "react";

import { FaCog } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import { FaMale } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <GoDashboard />,
    cName: "nav-text",
  },

  ,
  {
    title: "Home",
    path: "/home",
    icon: <FaHome />,
    cName: "nav-text",
  },
  {
    title: "Suggested Halls",
    path: "/hall",
    icon: <FaHandsHelping />,
    cName: "nav-text",
  },
  {
    title: "Wedding Planners",
    path: "/WeddingPlanners",
    icon: <FaMale />,
    cName: "nav-text",
  },
  {
    title: "Great Packages",
    path: "/great-packages",
    icon: <BiPackage />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
    cName: "nav-text  ",
  },
  {
    title: " Log Out",
    path: "/ log-out",
    icon: <AiOutlineLogout />,
    cName: "nav-text  ",
  },
];
// export const SidebarBottomData = [
//     {
//       title: 'Settings',
//       path: '/settings',
//       icon: <FaCog/>,
//       cName: 'nav-text  '
//     },
//     {
//       title: ' Log Out',
//       path: '/ log-out',
//       icon: <AiOutlineLogout />,
//       cName: 'nav-text  '
//     },

//   ];
