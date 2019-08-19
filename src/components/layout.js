import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/globals/footer/Footer"
import Navbar from "../components/globals/navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className={`bg-gray-200 min-h-screen font-sans`}>
        <div className="container mx-auto antialiased">
          <Navbar />
          <main>{children}</main>
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
