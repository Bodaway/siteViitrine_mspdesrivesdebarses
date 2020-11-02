import React from "react"
import { Footer } from "./footer"
import { Head } from "./head"
import { Header } from "./header"
import Menu from "./menu"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Head />
    <Menu />
    <Header />
    {children}
    <Footer />
  </>
)
