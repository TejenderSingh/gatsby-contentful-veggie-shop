import BackgroundImage from "gatsby-background-image"
import React from "react"

const BackgroundSection = ({
  img,
  styleClass,
  titleClass,
  title,
  children,
}) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className={titleClass}>{title}</h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  // title: "Veggie Land",
  styleClass: "default-bg",
}

export default BackgroundSection
