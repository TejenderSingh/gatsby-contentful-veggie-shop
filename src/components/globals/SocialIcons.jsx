import React from "react"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

const SocialIcons = () => {
  return (
    <>
      <a
        href="http://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`mr-2 -ml-1 text-2xl text-blue-700`}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl text-blue-500`}
      >
        <FaTwitter />
      </a>
    </>
  )
}

export default SocialIcons
