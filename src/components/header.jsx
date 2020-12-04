import React from "react" 
import styled from "styled-components"
import Img from "gatsby-image"
import { mediaDevice } from "../styles/global"

const Logo = styled(Img)`
  @media ${mediaDevice.desktop} {
    width: 20vw;
  }
  @media ${mediaDevice.laptopL} {
    width: 20vw;
  }
  @media ${mediaDevice.laptop} {
    width: 20vw;
  }
  @media ${mediaDevice.tablet} {
    width: 30vw;
  }
  @media ${mediaDevice.mobileL} {
    width: 30vw;
  }
  @media ${mediaDevice.mobileM} {
    width: 40vw;
  }
  @media ${mediaDevice.mobileS} {
    width: 40vw;
  }
`
const Inner = styled.div`
  position: relative;
  @media ${mediaDevice.desktop} {
    height: 20vw;
  }
  @media ${mediaDevice.laptopL} {
    height: 20vw;
  }
  @media ${mediaDevice.laptop} {
    height: 20vw;
  }
  @media ${mediaDevice.tablet} {
    height: 30vw;
  }
  @media ${mediaDevice.mobileL} {
    height: 30vw;
  }
  @media ${mediaDevice.mobileM} {
    height: 40vw;
  }
  @media ${mediaDevice.mobileS} {
    height: 40vw;
  }
`
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
      <ImageContainer>
        <Logo fluid={data.logo.childImageSharp.fluid} />
      </ImageContainer>
    </Inner>
  )
}
