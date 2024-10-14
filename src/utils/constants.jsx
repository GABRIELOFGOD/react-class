
import { BiUser } from 'react-icons/bi';
import { FaGoodreads, FaProductHunt } from 'react-icons/fa6';
import { MdOutlineDashboard } from "react-icons/md";

export const Lists = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboard />
  },
  {
    label: "User",
    path: "/dashboard/user",
    icon: <BiUser />
  },
  {
    label: "Products",
    path: "/dashboard/products",
    icon: <FaProductHunt />
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
    icon: <FaGoodreads />
  },
]
