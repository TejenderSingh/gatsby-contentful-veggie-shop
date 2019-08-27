import { graphql } from "gatsby"
import React from "react"
import AboutImg from "../components/AboutPage/AboutImg"
import BackgroundSection from "../components/globals/BackgroundSection"
import ImageTitle from "../components/globals/ImageTitle"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="page-bg style-bg"
    >
      <ImageTitle title="About" />
    </BackgroundSection>
    <SectionWrapper>
      <div className={`container mx-auto`}>
        <div className={`flex flex-col-reverse md:flex-row`}>
          <div className={`pt-4 md:pt-0 md:pr-12 w-full md:w-4/6 lg:w-8/12`}>
            <h1 className={`font-bold text-gray-800 text-center text-4xl mb-2`}>
              About Us
            </h1>
            <p className={`mb-4 text-lg`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              accusantium temporibus corrupti labore optio debitis iusto
              pariatur, earum maxime nam porro id inventore unde rerum expedita.
              Laborum a obcaecati consequuntur? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nam, suscipit laboriosam eaque saepe
              consectetur veniam natus hic cumque reiciendis eos.
            </p>
            <p className={`text-lg`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident illum veniam repellat saepe vero quis, odit, nam velit
              sed voluptatibus, explicabo a? Velit ipsam molestiae ullam id!
              Quasi, quas similique.
            </p>
          </div>
          <div
            className={`w-full sm:w-5/6 md:w-2/6 lg:w-4/12 flex flex-col justify-center`}
          >
            <AboutImg />
          </div>
        </div>
      </div>
    </SectionWrapper>
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
