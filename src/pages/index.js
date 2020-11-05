import React from "react"
import { Container, Button, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import Presentation from "../components/presentation"
import ProByCat from "../components/pro_by_cat"
import ActualiteLarge from "../components/actualites_large"
import { graphql } from "gatsby"

export const query = graphql`
  query defaultQuery {
    WIP: file(relativePath: { eq: "WIP.jpg" }) {
      childImageSharp {
        fluid(maxWidth:4134) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    steto: file(relativePath: { eq: "stethoscope.png" }) {
      childImageSharp {
        fluid(maxWidth:512) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    massage: file(relativePath: { eq: "massage.png" }) {
      childImageSharp {
        fluid(maxWidth:512) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    nurse: file(relativePath: { eq: "nurse.png" }) {
      childImageSharp {
        fluid(maxWidth:512) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const getCatImages = (data) => {
  return [
    data.steto.childImageSharp.fluid,
    data.massage.childImageSharp.fluid,
    data.nurse.childImageSharp.fluid,
  ]
}

export default ({data}) => (
  <Layout>
    <Presentation data={data}/>
    <ProByCat catImages={getCatImages(data)} />
    {/* <ActualiteLarge /> */}
  </Layout>
)
