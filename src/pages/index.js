import { graphql, Link } from "gatsby"
import React from "react"
import BackgroundSection from "../components/globals/BackgroundSection"
import AboutHomePage from "../components/HomePageComponents/About"
import {
  Gallery,
  GalleryWrapper,
} from "../components/HomePageComponents/Gallery"
import Specials from "../components/HomePageComponents/Specials"
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
        <div className={`bg-gray-900`} style={{ opacity: "0.9" }}>
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl capitalize py-12 px-12 text-gray-100 font-bold shadow-xl tracking-wider`}
          >
            Your local farmer's market <br></br>for your healthy family
          </h1>
        </div>
        <div className={`mt-12 flex justify-center`}>
          <Link
            to="/products"
            className={`bg-gray-100 hover:bg-green-600 text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-gray-100 font-semibold capitalize py-2 px-4 rounded shadow`}
            style={{ transition: ".2s ease-in-out" }}
          >
            see Products
          </Link>
        </div>
      </div>
    </BackgroundSection>
    <SectionWrapper>
      <div className={`container mx-auto`}>
        <Title title="Today's Specials" />
        <Specials specials={data.specials}></Specials>
      </div>
    </SectionWrapper>
    <SectionWrapper bg="bg-white">
      <div className={`container mx-auto lg:max-w-4xl`}>
        <Title title="About us" />
        <AboutHomePage></AboutHomePage>
      </div>
    </SectionWrapper>
    <SectionWrapper>
      <div className={`container mx-auto`}>
        <Title title="Gallery" />
        <GalleryWrapper>
          <Gallery />
        </GalleryWrapper>
      </div>
    </SectionWrapper>
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "home-page.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    specials: allContentfulVeggieProducts {
      edges {
        node {
          id
          productName
          productPrice
          productCategory
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
