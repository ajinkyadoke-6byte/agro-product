import React from "react";
import { NavLink } from "react-router-dom";
import {
  PlusCircle,
  Package,
  ShoppingBag,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2  bg-white">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">

        <NavLink
          to="/add"
          className="flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l"
        >
          <PlusCircle size={20} />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l"
        >
          <Package size={20} />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className="flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l"
        >
          <ShoppingBag size={20} />
          <p className="hidden md:block">Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;