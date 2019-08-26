import BackgroundImage from "gatsby-background-image"
import React from "react"

const BackgroundSection = ({ img, styleClass, children }) => {
  return (
    <BackgroundImage className={`${styleClass} cntr`} fluid={img}>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  styleClass: "default-bg",
}

export default BackgroundSection
