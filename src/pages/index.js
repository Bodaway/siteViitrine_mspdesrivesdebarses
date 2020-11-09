import React from "react"
import { Container, Button, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import Presentation from "../components/presentation"
import ProByCat from "../components/pro_by_cat"
import ActualiteLarge from "../components/actualites_large"
import Contact from "../components/contact"
import { graphql } from "gatsby"

export const query = graphql`
  query alldataquery {
    allTestdataJson {
      edges {
        node {
          Presentation {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          Actualites {
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            text
          }
          Categories {
            title
            icon {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            desc
            Pros {
              desc
              horaire
              name
              rdv
              telephone
            }
          }
        }
      }
    }
  }
`
export default ({ data }) => (
  <Layout>
    <Presentation data={data.allTestdataJson.edges[0].node.Presentation} />
    <ProByCat data={data.allTestdataJson.edges[0].node.Categories} />
    <ActualiteLarge data={data.allTestdataJson.edges[0].node.Actualites} />
    <Contact />
  </Layout>
)
