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
      title="Products"
      styleClass="page-bg"
      titleClass="text-2xl py-3 tracking-wider px-6 bg-green-500 text-white font-semibold"
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
