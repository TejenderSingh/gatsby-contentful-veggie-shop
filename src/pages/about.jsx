import { graphql } from "gatsby"
import React from "react"
import AboutImg from "../components/AboutPage/AboutImg"
import BackgroundSection from "../components/globals/BackgroundSection"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="page-bg"
      titleClass="text-2xl py-3 tracking-wider px-6 bg-green-500 text-white font-semibold"
    />
    <SectionWrapper>
      <div className={`flex flex-col-reverse md:flex-row`}>
        <div className={`pt-4 md:pt-0 md:pr-12 w-full md:w-4/6 lg:w-9/12`}>
          <h1 className={`font-bold text-gray-800 text-center text-4xl mb-2`}>
            About Us
          </h1>
          <p className={`mb-4 text-lg`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            accusantium temporibus corrupti labore optio debitis iusto pariatur,
            earum maxime nam porro id inventore unde rerum expedita. Laborum a
            obcaecati consequuntur? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nam, suscipit laboriosam eaque saepe consectetur
            veniam natus hic cumque reiciendis eos.
          </p>
          <p className={`text-lg`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            illum veniam repellat saepe vero quis, odit, nam velit sed
            voluptatibus, explicabo a? Velit ipsam molestiae ullam id! Quasi,
            quas similique.
          </p>
        </div>
        <div className={`w-full md:w-2/6 lg:w-3/12`}>
          <AboutImg />
        </div>
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
  }
`
export default IndexPage
