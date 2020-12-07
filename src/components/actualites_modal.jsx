import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"

const ModalC = styled(Modal)`
  & .gatsby-image-wrapper {
    float: left;
    margin: 10px;
    width: 20%;
  }
`
const ActuModal = ({ actualite, isFullScreen, closeFullScreen }) => {
  return (
    <ModalC show={isFullScreen} onHide={closeFullScreen} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{actualite.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Img fluid={actualite.image.childImageSharp.fluid} />
        <div
          dangerouslySetInnerHTML={{
            __html: actualite.text,
          }}
        />
      </Modal.Body>
    </ModalC>
  )
}

export default ActuModal
