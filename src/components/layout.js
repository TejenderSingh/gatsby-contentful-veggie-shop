import PropTypes from "prop-types"
import React, { Component } from "react"
import Footer from "../components/globals/footer/Footer"
import Backdrop from "../components/globals/MobileNav/Backdrop"
import SideNav from "../components/globals/MobileNav/SideNav"
// import Navbar from "../components/globals/navbar/Navbar"
import Navbar from "../components/globals/navbar/Navbar"
import "./layout.css"

class Layout extends Component {
  state = {
    navOpen: false,
  }
  toggleSideNav = () => {
    this.setState(prevState => {
      return { navOpen: !prevState.navOpen }
    })
  }
  closeSideNav = () => {
    this.setState({
      navOpen: false,
    })
  }
  render() {
    let backdrop
    if (this.state.navOpen) {
      backdrop = <Backdrop closeNav={this.closeSideNav} />
    }
    return (
      <>
        <div className={`antialiased bg-gray-200 min-h-screen font-sans`}>
          <SideNav nav={this.state.navOpen} closeNav={this.closeSideNav} />
          {backdrop}
          <div className={`bg-gray-900`}>
            <Navbar toggleNav={this.toggleSideNav} />
          </div>
          <div className={``} style={{ minHeight: `calc(100vh - 80px)` }}>
            <main>{this.props.children}</main>
          </div>
          <div className={`bg-green-200`}>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
