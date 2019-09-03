import { Link } from "gatsby"
import React from "react"

const Nav = ({ ulClasses, navClasses, linkClasses, closeNav }) => {
  const navbar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "Contact", link: "/contact" },
  ]

  return (
    <nav className={navClasses}>
      <ul className={ulClasses}>
        {navbar.map(item => {
          return (
            <Link
              key={item.id}
              to={item.link}
              className={linkClasses}
              onClick={closeNav}
              style={{ transition: ".2s ease-in-out" }}
              activeStyle={{ color: "#48bb78" }}
            >
              {item.name}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
