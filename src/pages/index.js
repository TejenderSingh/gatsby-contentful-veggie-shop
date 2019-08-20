import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/globals/BackgroundSection"
import {
  Gallery,
  GalleryWrapper,
} from "../components/HomePageComponents/Gallery"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"
import { Title } from "../components/Title"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="defaultBg"
    >
      <div>
        <h1
          className={`text-2xl md:text-3xl lg:text-5xl capitalize bg-gray-200 py-12 px-12 text-gray-800 font-bold `}
        >
          Your local farmer's market <br></br>for your healthy family
        </h1>
      </div>
    </BackgroundSection>
    <SectionWrapper>
      <Title title="Gallery" />
      <GalleryWrapper>
        <Gallery />
      </GalleryWrapper>
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
  }
`
export default IndexPage
