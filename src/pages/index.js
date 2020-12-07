import React from "react"
import Layout from "../components/layout"
import Presentation from "../components/presentation"
import ProByCat from "../components/pro_by_cat"
import ActualiteLarge from "../components/actualites_large"
import Contact from "../components/contact"
import Recrutement from "../components/recrutement"
import Recap from "../components/recap"
import ActuSmall from "../components/actualites_small"
import ContactSmall from "../components/contact_small"
import { graphql } from "gatsby"
import {
  getRecapTheme,
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
              map_label
              name
              location_name
              adr_google
              rdv
              telephone
            }
          }
          Recrutement {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          menu {
            logo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          header {
            background {
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            logo {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          footer {
            CCVS_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            ARS_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
export default ({ data }) => (
  <Layout data={data}>
    <ThemeProvider theme={getRecapTheme}>
      <Recap>
        <ActuSmall data={data.allProddataJson.edges[0].node.Actualites} />
        <ContactSmall data={data.allProddataJson.edges[0].node.Categories} />
      </Recap>
    </ThemeProvider>
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
      <Contact data={data.allProddataJson.edges[0].node.Categories} />
    </ThemeProvider>
    {/* <ThemeProvider theme={getContactTheme}>
      <Recrutement data={data.allProddataJson.edges[-1].node.Recrutement}/>
    </ThemeProvider> */}
  </Layout>
)
