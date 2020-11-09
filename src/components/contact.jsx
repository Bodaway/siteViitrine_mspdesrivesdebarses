import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, borderBox, Section } from "../styles/global"

const MapOuter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  min-height: 200px;
`
const MapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  width: 60%;
`

const Contact = () => {
  return (
    <Section>
      <SectionTitle title="Contact" color="#555555" color2="#555555" />
      <MapOuter>
        <MapCanvas>
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=vendeuvre%20sur%20barse&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          {/* <a href="https://www.whatismyip-address.com/divi-discount/"></a> */}
        </MapCanvas>
      </MapOuter>
    </Section>
  )
}

export default Contact
