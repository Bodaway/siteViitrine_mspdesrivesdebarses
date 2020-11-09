import React, { useState } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import { shadow, borderBox, Section } from "../styles/global"
import { Modal } from "react-bootstrap"

const Link = styled.a`
  text-decoration: underline;
`
const IconLegal = styled.p`
  font-size: smaller;
`

export function Footer(props) {
  const [isFullScreen, setIsFullscreen] = useState(false)

  const closeFullScreen = () => {
    setIsFullscreen(false)
  }
  const openFullScreen = () => {
    setIsFullscreen(true)
  }

  return (
    <Container class="text-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link onClick={openFullScreen}>Mentions légales</Link>

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
    </Container>
  )
}
