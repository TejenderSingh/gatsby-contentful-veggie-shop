import React from "react"
import { FiAlignJustify } from "react-icons/fi"

const HamburgerIcon = ({ nav }) => {
  return (
    <FiAlignJustify
      className="text-gray-100 hover:text-gray-600 text-3xl cursor-pointer"
      style={{ transition: " all .3s ease-in-out" }}
      onClick={nav}
    ></FiAlignJustify>
  )
}

export default HamburgerIcon
