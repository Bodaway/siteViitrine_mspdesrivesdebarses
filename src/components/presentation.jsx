import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, borderBox, Section } from "../styles/global"
import { graphql } from "gatsby"
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
`
const RightContent = styled.div`
  display: inline-block;
  height: 100%;
  width: 20%;
  overflow: hidden;
  ${borderBox}
  ${shadow}
`

const Emp = styled.span`
  color: #68c100;
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
      <SectionTitle title="Présentation" color="#68C100" color2="#82C535" />
      <Content>
        <LeftContent>
          <ExternalCarousel data={data} interval={10000} />
          <ExternalCarousel data={data} interval={12000} />
        </LeftContent>
        <MiddleContent>
          <Und>Lorem ipsum dolor :</Und>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            molestie ipsum. In hac habitasse platea dictumst. Aliquam suscipit
            vestibulum diam, at dignissim nisl hendrerit pharetra. Vestibulum
            rhoncus justo porta, <Emp>sodales ligula vitae</Emp>, porttitor
            metus. Vestibulum sed laoreet eros. Quisque ut tellus varius,
            aliquam velit vitae, placerat nisi. Phasellus congue ornare est, sed
            consectetur urna porta viverra. Vivamus pharetra accumsan dui, in
            pellentesque est scelerisque non. Nullam eget augue at urna laoreet
            aliquet. Praesent nunc dui, pulvinar a nunc at, porttitor rhoncus
            quam.
          </p>
          <Und>Praesent semper quam massa</Und>
          <p>
            Praesent semper quam massa, ut varius urna sagittis sed. Nulla felis
            lorem, blandit ac efficitur eget, dapibus in risus. Suspendisse
            aliquet lorem in purus auctor tempor. Nullam gravida lacinia
            feugiat. Quisque mattis mi elit. Aenean consectetur vulputate justo
            sed laoreet. Duis eu odio porta, vestibulum nisl id, posuere quam.
            Donec vehicula nunc et purus porta, id pellentesque erat dignissim.
            Duis ullamcorper risus velit, quis semper enim imperdiet mollis.
          </p>
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
