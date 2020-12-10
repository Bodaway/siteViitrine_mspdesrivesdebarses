import React, { useState } from "react"
import styled from "styled-components"
import { shadow, borderBox, Section } from "../styles/global"
import { Modal } from "react-bootstrap"
import Img from "gatsby-image"

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  background-color: #505050;
  color: white;
  padding: 20px;
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Link = styled.a`
  text-decoration: underline;
  padding-right: 100px;
  align-self: center;
`

const IconLegal = styled.p`
  font-size: smaller;
`

const LinkImage = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
`
const Image = styled(Img)`
  width: 100px;
`
export function Footer({ data }) {
  const [isFullScreen, setIsFullscreen] = useState(false)

  const closeFullScreen = () => {
    setIsFullscreen(false)
  }
  const openFullScreen = () => {
    setIsFullscreen(true)
  }

  return (
    <Inner>
      <Link onClick={openFullScreen}>Mentions légales</Link>
      <LeftContent>
        <LinkImage href="https://www.ccvendeuvresoulaines.fr/" target="_blank">
          <Image fluid={data.CCVS_image.childImageSharp.fluid} />
        </LinkImage>
        <LinkImage href="https://www.grand-est.ars.sante.fr/" target="_blank">
          <Image fluid={data.ARS_image.childImageSharp.fluid} />
        </LinkImage>
      </LeftContent>

      <Modal show={isFullScreen} onHide={closeFullScreen} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Mentions légales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ASSOCIATION DU VENDEUVROIS DES PROFESSIONNELS DE SANTE <br />
            Association déclarée <br />
            SIRET : 848 795 324 000 13 <br />
            3 Avenue de l'armée Leclerc <br />
            10140 VENDEUVRE-SUR-BARSE
          </p>
          <p>
            Concepteur:{" "}
            <a href="mailto:michel.bonenfant.jr@protonmail.com">
              Michel Bonenfant
            </a>
            .
          </p>
          <p>
            Créateur du logo:{" "}
            <a href="mailto:michel.bonenfant.jr@protonmail.com">
              Christine Bonenfant
            </a>
            .
          </p>
          <IconLegal>
            Icons made by{" "}
            <a href="http://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            and{" "}
            <a
              href="https://www.flaticon.com/free-icon/nurse_1165528"
              title="mavadee"
            >
              mavadee
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </IconLegal>
        </Modal.Body>
      </Modal>
    </Inner>
  )
}
