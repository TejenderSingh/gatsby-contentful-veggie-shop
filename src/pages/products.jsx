import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/globals/BackgroundSection"
import Layout from "../components/layout"
import Products from "../components/Products/Products"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Products"
      styleClass="page-bg"
      titleClass="text-2xl tracking-wider px-10 py-4 bg-gray-900 shadow-xl text-gray-100 font-semibold"
    />
    <SectionWrapper>
      <div className={`container mx-auto`}>
        <Products items={data.products}></Products>
      </div>
    </SectionWrapper>
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "8.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    products: allContentfulVeggieProducts {
      edges {
        node {
          id
          productName
          productPrice
          quantity
          special
          productDescription {
            productDescription
          }
          productImage {
            fluid(maxWidth: 300) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage
