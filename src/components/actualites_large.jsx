import React, { useState } from "react"
import Slider from "react-slick"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { borderBox, shadow } from "../styles/global"
import { Modal } from "react-bootstrap"
import ActuData from "../../content/actualites.yaml"

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
  padding-top: 25px;
  padding-right: 25px;
  padding-left: 25px;

  & img {
    border: solid 1px lightgray;
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
  margin-top: 40px;

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
          <img
            src={"/bonne_annee_2020_.jpg"}
            alt="image news"
            data-width="400"
            data-height="300"
          />
          <h4>{actualite.title}</h4>
        </Column>
        <VLine />
      </News>
      <Modal show={isFullScreen} onHide={closeFullScreen}>
        <Modal.Header closeButton>
          <Modal.Title>{actualite.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{actualite.text}</Modal.Body>
      </Modal>
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

const ActualitesLarge = () => {
  console.log(ActuData.Actualites)
  return (
    <section id="actualitelarge">
      <SectionTitle title="Actualités" color="#ed0b3b" color2="#ed0b3b"/>

      <SliderActu actualites={ActuData.Actualites} />
    </section>
  )
}

export default ActualitesLarge
