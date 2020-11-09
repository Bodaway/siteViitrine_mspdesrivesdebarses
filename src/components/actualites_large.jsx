import React, { useState } from "react"
import Slider from "react-slick"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { borderBox, shadow, Section } from "../styles/global"
import { Modal } from "react-bootstrap"
import Img from "gatsby-image"

const InnerBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 50px;
`
const News = styled.div`
  ${shadow}
  display:flex;
  justify-content: space-between;
  margin: 10px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: stretch;
  padding-top: 25px;
  padding-right: 25px;
  padding-left: 25px;
  width: 90%;

  & img {
    border: solid 1px lightgray;
  }

  & h4 {
    padding: 10px;
  }
`
const VLine = styled.div`
  display: none;
  flex-direction: row;
  width: 1px;
  background-color: red;

  ${News}:hover & {
    display: flex;
  }
`
const InnerActu = styled.div`
  display: flex;
  margin-top: 0px;

  & .slick-slider {
    display: flex;
    overflow: hidden;
  }
  & .slick-list {
    min-height: 0;
    min-width: 0;
    max-width: 90vw;
    overflow: hidden;
  }
  & .slick-track {
    display: flex;
    justify-content: baseline;
  }
  & .slick-arrow {
    display: flex;
    margin: 10px;
  }
`
const Image = styled(Img)`
  align-self: left;
`
const ModalC = styled(Modal)`
  & .gatsby-image-wrapper {
    float: left;
    margin: 10px;
    width: 20%;
  }
`

const PrevButton = ({ className, style, onClick }) => {
  return (
    <InnerBtn className={className} style={{ ...style }} onClick={onClick}>
      &lt;
    </InnerBtn>
  )
}
const NextButton = ({ className, style, onClick }) => {
  return (
    <InnerBtn className={className} style={{ ...style }} onClick={onClick}>
      &gt;
    </InnerBtn>
  )
}

const Actu = ({ actualite = {} }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const getFullScreen = e => {
    setIsFullScreen(true)
  }
  const closeFullScreen = () => {
    console.log("enter to close")
    setIsFullScreen(false)
  }

  return (
    <>
      <News onClick={getFullScreen}>
        <Column>
          <Image fluid={actualite.image.childImageSharp.fluid} />
          <h4>{actualite.title}</h4>
        </Column>
        <VLine />
      </News>
      <ModalC show={isFullScreen} onHide={closeFullScreen} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{actualite.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Img fluid={actualite.image.childImageSharp.fluid} />
          <div
            dangerouslySetInnerHTML={{
              __html: actualite.text
            }}
          />
        </Modal.Body>
      </ModalC>
    </>
  )
}

const SliderActu = ({ actualites = [] }) => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  }

  const actulst = actualites.map(a => (
    <div>
      <Actu actualite={a} />
    </div>
  ))

  return (
    <InnerActu>
      <Slider {...settings}>{actulst}</Slider>
    </InnerActu>
  )
}

const ActualitesLarge = ({ data }) => {
  console.log(data)
  return (
    <Section id="actualitelarge">
      <SectionTitle title="Actualités" color="#E7302A" color2="#E7302A" />

      <SliderActu actualites={data} />
    </Section>
  )
}

export default ActualitesLarge
