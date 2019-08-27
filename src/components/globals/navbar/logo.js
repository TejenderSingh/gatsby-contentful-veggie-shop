import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      LogoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 170, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.LogoImage.childImageSharp.fixed} />
}

export default LogoImage
