import React from "react"

const Backdrop = ({ closeNav }) => {
  return (
    <div
      style={{ background: "rgba(0,0,0, 0.5)" }}
      className={`h-screen fixed w-full z-20 cursor-pointer block md:hidden`}
      onClick={closeNav}
    />
  )
}

export default Backdrop
