import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const IMAGES = graphql`
  query {
    getImages: allFile(filter: { relativeDirectory: { eq: "home-gallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(IMAGES)
  const images = data.getImages.edges
  return images.map(({ node }, index) => {
    return (
      <div key={index} className={`item-${index + 1}`}>
        <Img fluid={node.childImageSharp.fluid} />
      </div>
    )
  })
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;

  @media (min-width: 640px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "one one"
      "two three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "one two three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
export { GalleryWrapper, Gallery }
