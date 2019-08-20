import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/globals/BackgroundSection"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      styleClass="page-bg"
      titleClass="text-2xl tracking-wider px-10 py-4 bg-gray-900 shadow-xl text-gray-100 font-semibold"
    />
    <SectionWrapper></SectionWrapper>
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
  }
`
export default IndexPage
