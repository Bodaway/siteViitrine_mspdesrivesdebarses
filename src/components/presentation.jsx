import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, borderBox } from "../styles/global"

const Presentation = () => {
  const Section = styled.section`
    position: relative;
    padding-top: 100px;
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
    display: inline-block;
    height: 100%;
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
    color: #4cb93d;
    font-weight: bold;
  `
  const Und = styled.p`
    text-decoration: underline;
  `

  return (
    <Section id="presentation">
      <SectionTitle title="Présentation" color="#4cb93d" color2="#6cbe60" />
      <LeftContent></LeftContent>
      <MiddleContent>
        <Und>Lorem ipsum dolor :</Und>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          molestie ipsum. In hac habitasse platea dictumst. Aliquam suscipit
          vestibulum diam, at dignissim nisl hendrerit pharetra. Vestibulum
          rhoncus justo porta, <Emp>sodales ligula vitae</Emp>, porttitor metus.
          Vestibulum sed laoreet eros. Quisque ut tellus varius, aliquam velit
          vitae, placerat nisi. Phasellus congue ornare est, sed consectetur
          urna porta viverra. Vivamus pharetra accumsan dui, in pellentesque est
          scelerisque non. Nullam eget augue at urna laoreet aliquet. Praesent
          nunc dui, pulvinar a nunc at, porttitor rhoncus quam.{" "}
        </p>
        <Und>Praesent semper quam massa</Und>
        <p>
          Praesent semper quam massa, ut varius urna sagittis sed. Nulla felis
          lorem, blandit ac efficitur eget, dapibus in risus. Suspendisse
          aliquet lorem in purus auctor tempor. Nullam gravida lacinia feugiat.
          Quisque mattis mi elit. Aenean consectetur vulputate justo sed
          laoreet. Duis eu odio porta, vestibulum nisl id, posuere quam. Donec
          vehicula nunc et purus porta, id pellentesque erat dignissim. Duis
          ullamcorper risus velit, quis semper enim imperdiet mollis.{" "}
        </p>
      </MiddleContent>
      <RightContent></RightContent>
    </Section>
  )
}

export default Presentation
