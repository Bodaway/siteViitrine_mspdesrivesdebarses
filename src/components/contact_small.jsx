import React, { useState } from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow,borderBox, Section, SmallSection, mediaDevice } from "../styles/global"
import { Modal } from "react-bootstrap"
import Img from "gatsby-image"
import ActuModal from "./actualites_modal"

const CustomSection = styled(SmallSection)`
  @media ${mediaDevice.mobileL} {
      width: 100%;
  }
`

const Inner = styled.div`
height: 30vh;
padding: 15px;
${shadow}
${borderBox}
`
const ContactSmall = ({ data }) => {
  return (
    <CustomSection>
      <SectionTitle title="Nous trouver" />
      <Inner>
          <p>Association Du Vendeuvrois des Professionnels de Santé (ADVPS)<br/><a href="mailto:contact.advps@gmail.com">contact.advps@gmail.com</a></p>
          <p>1 Avenue de la République,<br/> 10140 Vendeuvre-sur-Barse</p>
        <iframe
          width="100%"
          height="50%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=1+Avenue+de+la+République,+10140+Vendeuvre-sur-Barse&t=&z=16&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </Inner>
    </CustomSection>
  )
}

export default ContactSmall
