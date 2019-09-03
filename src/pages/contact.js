import { graphql } from "gatsby"
import React from "react"
import Form from "../components/ContactPage/Form"
import BackgroundSection from "../components/globals/BackgroundSection"
import ImageTitle from "../components/globals/ImageTitle"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact us" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="page-bg"
    >
      <ImageTitle title="Contact" />
    </BackgroundSection>
    <SectionWrapper>
      <Form />
    </SectionWrapper>
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ContactPage
