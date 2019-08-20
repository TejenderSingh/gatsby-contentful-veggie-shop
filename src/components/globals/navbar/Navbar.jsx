import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav
      className={`container mx-auto font-semibold px-6 flex justify-between py-4`}
    >
      <h1>Logo</h1>
      <ul className={`flex justify-between`}>
        <li>
          <Link className={`ml-10`} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`ml-10`} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={`ml-10`} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className={`ml-10`} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
