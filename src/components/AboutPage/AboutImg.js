import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      AboutImage: file(relativePath: { eq: "about-main.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.AboutImage.childImageSharp.fluid} />
}

export default AboutImage
