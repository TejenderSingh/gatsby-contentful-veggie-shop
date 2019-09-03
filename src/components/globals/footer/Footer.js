import { graphql, Link } from "gatsby"
import React from "react"
import { FiMail, FiMapPin, FiSmartphone } from "react-icons/fi"
import LogoImage from "../navbar/logo"
import SocialIcons from "../SocialIcons"
import FooterImage from "./FooterImg"

const Footer = () => {
  const footerNavbar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "Contact", link: "/contact" },
  ]
  return (
    <footer>
      <div className={`container mx-auto px-6 py-12 grid grid-columns-10`}>
        <div
          className={`w-full pb-6 lg:pb-0 col-span-10 md:col-span-6 lg:col-span-4`}
        >
          <LogoImage />
          <p className={`text-lg leading-snug pb-2 font-light`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nobis deserunt non itaque explicabo vitae eius recusandae hic eaque
            incidunt fugiat maiores sapiente aliquid
          </p>
          <div className={`flex items-center leading-wide py-1`}>
            <span className={`mr-1 text-xl text-red-700`}>
              <FiMapPin />
            </span>
            <p>123 Main Road, Christchurch, New Zealand</p>
          </div>
          <div className={`flex items-center pb-1`}>
            <span className={`mr-1 text-xl text-red-700`}>
              <FiMail />
            </span>
            <p>mymail@mail.com</p>
          </div>
          <div className={`flex items-center`}>
            <span className={`mr-1 text-xl text-red-700`}>
              <FiSmartphone />
            </span>
            <p>012-345-6789</p>
          </div>
        </div>
        <div
          className={`w-full pb-6 md:px-6 md:pt-0 col-span-10 md:col-span-4 lg:col-span-2`}
        >
          <h1
            className={`text-2xl font-semibold text-gray-800 mb-2 leading-none`}
          >
            Site Info
          </h1>
          <nav className={`flex flex-col leading-loose`}>
            <ul>
              {footerNavbar.map(item => {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className={`text-gray-600 hover:text-gray-800 font-semibold w-20`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className={`flex mt-3`}>
            <SocialIcons />
          </div>
        </div>
        <div
          className={`w-full col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-4`}
        >
          <FooterImage />
        </div>
      </div>
    </footer>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: { eq: "map-chch.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default Footer
