import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/globals/BackgroundSection"
import ImageTitle from "../components/globals/ImageTitle"
import Layout from "../components/layout"
import Products from "../components/Products/Products"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"

const ProductsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="page-bg default-bg"
    >
      <ImageTitle title="Products" />
    </BackgroundSection>
    <SectionWrapper>
      <div className={`container mx-auto`}>
        <Products items={data.products}></Products>
      </div>
    </SectionWrapper>
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "products.jpg" }) {
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
export default ProductsPage
