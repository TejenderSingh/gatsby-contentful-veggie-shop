import React from "react"
import { FiAlignJustify } from "react-icons/fi"

const HamburgerIcon = ({ nav }) => {
  return (
    <FiAlignJustify
      className={`text-gray-800 hover:text-gray-600 text-3xl cursor-pointer`}
      style={{ transition: " all .2s ease-in-out" }}
      onClick={nav}
    ></FiAlignJustify>
  )
}

export default HamburgerIcon
