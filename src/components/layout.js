import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/globals/footer/Footer"
import Navbar from "../components/globals/navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className={`antialiased bg-gray-200 min-h-screen font-sans`}>
        <div className={`bg-white`}>
          <Navbar />
        </div>
        <div className={``} style={{ minHeight: `calc(100vh - 80px)` }}>
          <main>{children}</main>
        </div>
        <div className={`bg-green-200`}>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
