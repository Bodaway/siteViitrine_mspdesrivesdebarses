import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import {
  shadow,
  borderBox,
  Section,
  mediaDevice,
} from "../styles/global"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"

const Content = styled.div`
  display: flex;
`

const LeftContent = styled.div`
  display: inline-block;
  height: 100%;
  width: 20%;
  overflow: hidden;
  ${borderBox}
  ${shadow}

   @media ${mediaDevice.mobileL} {
    display: none;
  }
`
const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: 60%;
  padding: 25px;
  overflow: hidden;
  ${borderBox}
  ${shadow}

   @media ${mediaDevice.mobileL} {
    width: 100%;
  }
`
const RightContent = styled.div`
  display: inline-block;
  height: 100%;
  width: 20%;
  overflow: hidden;
  ${borderBox}
  ${shadow}

   @media ${mediaDevice.mobileL} {
    display: none;
  }
`

const Emp = styled.span`
  color: ${props => props.theme.mainColor};
  font-weight: bold;
`
const Und = styled.p`
  text-decoration: underline;
`
const ExternalCarousel = ({ data, interval }) => {
  return (
    <Carousel controls={false} indicators={false} interval={interval}>
      <Carousel.Item>
        <Img fluid={data.image.childImageSharp.fluid} />
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={data.image.childImageSharp.fluid} />
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={data.image.childImageSharp.fluid} />
      </Carousel.Item>
    </Carousel>
  )
}

const Presentation = ({ data }) => {
  return (
      <Section id="presentation">
        <SectionTitle title="Présentation" />
        <Content>
          <LeftContent>
            <ExternalCarousel data={data} interval={10000} />
            <ExternalCarousel data={data} interval={12000} />
          </LeftContent>
          <MiddleContent>
            <Und>Site en construction :</Und>
            <p>L'équipe de la maison de santé des rives de barse travaille activement à publier le site.</p>
          </MiddleContent>
          <RightContent>
            <ExternalCarousel data={data} interval={11000} />
            <ExternalCarousel data={data} interval={13000} />
          </RightContent>
        </Content>
      </Section>
  )
}

export default Presentation
