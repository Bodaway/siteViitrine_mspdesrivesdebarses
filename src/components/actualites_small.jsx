import React, { useState } from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, Section, SmallSection, mediaDevice } from "../styles/global"
import { Modal } from "react-bootstrap"
import Img from "gatsby-image"
import ActuModal from "./actualites_modal"

const CustomSection = styled(SmallSection)`
  @media ${mediaDevice.mobileL} {
    display: none;
  }
`
const Inner = styled.div`
  ${shadow}
`
const News = styled.div`
  display: flex;
  height: 60%;
  justify-content: space-between;
  align-items: stretch;

  & > h4 {
    align-self: center;
  }
`
const Image = styled(Img)`
  width: 10vh;
  margin: 5px;
`
const VLine = styled.div`
  display: flex;
  visibility: hidden;
  width: 1px;
  background-color: ${props => props.theme.mainColor};
  margin: 1px;

  ${News}:hover & {
    visibility: visible;
  }
`

const Actu = ({ actualite = {} }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const getFullScreen = e => {
    setIsFullScreen(true)
  }
  const closeFullScreen = () => {
    setIsFullScreen(false)
  }

  return (
    <>
      <News onClick={getFullScreen}>
        <Image fluid={actualite.image.childImageSharp.fluid} />
        <h4>{actualite.title}</h4>
        <VLine />
      </News>
      <ActuModal
        actualite={actualite}
        isFullScreen={isFullScreen}
        closeFullScreen={closeFullScreen}
      />
    </>
  )
}

const ActuSmall = ({ data }) => {
  const actulst = data.map(a => <Actu actualite={a} />)

  return (
    <CustomSection>
      <SectionTitle title="Actualités" />
      <Inner>{actulst}</Inner>
    </CustomSection>
  )
}

export default ActuSmall
