import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Logo = styled(Img)`
    top: -50%;  /* position the top  edge of the element at the middle of the parent */
    left: 52%; /* position the left edge of the element at the middle of the parent */
    height: 100%;
    width: 45%;
    transform: translate(-50%, -50%); /* This is a shorthand of
                                         translateX(-50%) and translateY(-50%) */
`
const Inner = styled.div`
display:block;
position:relative;
height:40vh;

`
const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  width: 100%;
  overflow: hidden;
  opacity:50%;
  }
`


export function Header({ data }) {
  return (
    <Inner>
      <Image fluid={data.background.childImageSharp.fluid} />
      <Logo fluid={data.logo.childImageSharp.fluid} />
      {/* <h1>Maison de santé pluridisciplinaire des Rives de Barse</h1> */}
    </Inner>
  )
}
