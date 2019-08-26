import React from "react"
import HamburgerIcon from "../MobileNav/HamburgerIcon"
import Nav from "./Nav"

const Navbar = ({ toggleNav }) => {
  return (
    <>
      <div className="container mx-auto flex items-center md:justify-between py-4 px-8">
        <div className="mr-6 md:hidden">
          <HamburgerIcon nav={toggleNav} />
        </div>
        <div className="text-gray-100">Logo</div>
        <Nav
          navClasses="hidden md:block"
          linkClasses="text-white ml-10 font-semibold py-4 border-b-2 border-solid border-transparent hover:border-gray-100"
        />
      </div>
    </>
  )
}

export default Navbar
