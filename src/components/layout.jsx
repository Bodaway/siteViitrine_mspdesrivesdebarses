import React from "react"
import { Footer } from "./footer"
import { Head } from "./head"
import { Header } from "./header"
import Menu from "./menu"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../styles/global"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default ({ data,children }) => (
  <>
    <GlobalStyle />
    <Head />
    <ThemeProvider theme={theme}>
      <Menu />
      <Header />
      {children}
      <Footer data={data.allProddataJson.edges[0].node.footer}/>
    </ThemeProvider>
  </>
)
