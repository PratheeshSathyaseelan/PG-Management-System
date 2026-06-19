import {
  FiHome,
  FiGrid,
  FiUsers,
  FiCreditCard,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import { MdBedroomParent } from "react-icons/md";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    title: "My Properties",
    path: "/properties",
    icon: FiGrid,
  },
  {
    title: "Room Management",
    path: "/rooms",
    icon: MdBedroomParent,
  },
  {
    title: "Guest Management",
    path: "/guests",
    icon: FiUsers,
  },
  {
    title: "Fee Collection",
    path: "/payments",
    icon: FiCreditCard,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: FiBarChart2,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];

export default menuItems;