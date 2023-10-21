import { NavbarRoutes } from "@/components/navbarRoutes"

import { MobileSidebar } from "./mobileSidebar"

export const Navbar = () => {
  return (
    <div className="flex items-center h-full p-4 bg-white border-b shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}