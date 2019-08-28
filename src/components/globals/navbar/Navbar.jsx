import { Link } from "gatsby"
import React from "react"
import HamburgerIcon from "../MobileNav/HamburgerIcon"
import SocialIcons from "../SocialIcons"
import LogoImage from "./logo"
import Nav from "./Nav"

const Navbar = ({ toggleNav }) => {
  return (
    <>
      <div
        className={`container mx-auto flex items-center justify-between px-6`}
      >
        <div className={`md:hidden`}>
          <HamburgerIcon nav={toggleNav} />
        </div>
        <Link to="/" className={`flex items-center`}>
          <LogoImage />
        </Link>
        <Nav
          navClasses="hidden md:block"
          linkClasses="text-gray-800 ml-10 font-semibold hover:text-gray-600"
        />
        <div className={`flex`}>
          <SocialIcons />
        </div>
      </div>
    </>
  )
}

export default Navbar
