import React from "react"
import { Container, Button, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import Presentation from "../components/presentation"
import ProByCat from "../components/pro_by_cat"
import ActualiteLarge from "../components/actualites_large"
import { graphql } from "gatsby"

export const query = graphql`
  query defaultQuery {
    file(relativePath: { eq: "WIP.jpg" }) {
      childImageSharp {
        fluid(maxWidth:4134) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ({data}) => (
  <Layout>
    <Presentation data={data}/>
    {/* <ProByCat /> */}
    {/* <ActualiteLarge /> */}
  </Layout>
)
