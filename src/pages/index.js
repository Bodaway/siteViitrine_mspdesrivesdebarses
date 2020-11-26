import React from "react"
import Layout from "../components/layout"
import Presentation from "../components/presentation"
import ProByCat from "../components/pro_by_cat"
import ActualiteLarge from "../components/actualites_large"
import Contact from "../components/contact"
import { graphql } from "gatsby"
import {
  getPresentationTheme,
  getCategorieTheme,
  getActualiteTheme,
  getContactTheme,
} from "../styles/global"
import { ThemeProvider } from "styled-components"

export const query = graphql`
  query alldataquery {
    allProddataJson {
      edges {
        node {
          Presentation {
            imagesV {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            imagesH {
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
    <ThemeProvider theme={getPresentationTheme}>
      <Presentation data={data.allProddataJson.edges[0].node.Presentation} />
    </ThemeProvider>
    <ThemeProvider theme={getCategorieTheme}>
      <ProByCat data={data.allProddataJson.edges[0].node.Categories} />
    </ThemeProvider>
    <ThemeProvider theme={getActualiteTheme}>
      <ActualiteLarge data={data.allProddataJson.edges[0].node.Actualites} />
    </ThemeProvider>
    <ThemeProvider theme={getContactTheme}>
      <Contact />
    </ThemeProvider>
  </Layout>
)
