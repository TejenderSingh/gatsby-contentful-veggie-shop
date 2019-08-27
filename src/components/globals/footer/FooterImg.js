import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const FooterImage = () => {
  const data = useStaticQuery(graphql`
    query {
      FooterImage: file(relativePath: { eq: "map.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.FooterImage.childImageSharp.fluid} />
}

export default FooterImage
