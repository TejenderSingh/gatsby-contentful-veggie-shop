import React from "react"
import { FiX } from "react-icons/fi"
import Nav from "../navbar/Nav"
import "./SideNav.css"

const SideNav = ({ nav, closeNav }) => {
  let classes = "side-nav"
  if (nav) {
    classes = "side-nav open"
  }
  return (
    <div className="relative block md:hidden">
      <div className={classes}>
        <div style={{ position: "absolute", top: 20, left: 20 }}>
          <FiX
            className="text-4xl text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={closeNav}
          ></FiX>
        </div>
        <Nav
          ulClasses="flex flex-col text-lg font-semibold"
          linkClasses="text-grey-darker my-4 font-semibold hover:text-teal-600"
          closeNav={closeNav}
        />
      </div>
    </div>
  )
}

export default SideNav
