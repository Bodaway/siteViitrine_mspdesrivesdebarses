import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { Section, mediaDevice } from "../styles/global"
import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet"

const Content = styled.div`
  margin-top: ${props => props.theme.marginTopSection};
  display: flex;
  min-height: 200px;

  @media ${mediaDevice.mobileL} {
    height: 300px;
  }
`
const MapCanvas = styled(MapContainer)`
  overflow: hidden;
  background: none !important;
  width: 60%;
  height: 500px;

  @media ${mediaDevice.mobileL} {
    width: 100%;
    height: 500px;
  }
`
const LeftContent = styled.div`
  width: 20%;
`
const Place = styled.div``

const Contact = () => {
  return (
    <Section id="Contact">
      <SectionTitle title="Contact" />
      <Content>
      <LeftContent>
        <Place>Maison de santé, 1 avenue de la République, Vendeuvre sur Barse</Place>
        <Place>CALON-SUREAU Benoit, 15 rue de l’ Eglise, La Villeneuve au Chêne</Place>
        <Place>DEHARBE Pauline, 15 rue de la Côte d'Or, Vendeuvre sur Barse</Place>
        <Place>Pharmacie de la Barse, François JACQUEL, 3 Avenue de l'Armée Leclerc, Vendeuvre sur Barse</Place>
        <Place>Pharmacie de l’Orient, Pascal AVIERINOS, Rue des ancienne Tanneries, Centre commercial Bi1, Vendeuvre sur Barse </Place>
      </LeftContent>
        <MapCanvas
          center={[48.2347,4.4313]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[48.2378, 4.46432]}>
            <Tooltip direction="right" offset={[-8, -2]} opacity={1} permanent>
              <span>Maison de santé</span>
            </Tooltip>
          </Marker>
          <Marker position={[48.23884,4.38646]}>
            <Tooltip direction="right" offset={[-8, -2]} opacity={1} permanent>
              <span>CALON-SUREAU Benoit</span>
            </Tooltip>
          </Marker>
          <Marker position={[48.23431,4.46397]}>
            <Tooltip direction="right" offset={[-8, -2]} opacity={1} permanent>
              <span>DEHARBE Pauline</span>
            </Tooltip>
          </Marker>
          <Marker position={[48.23745,4.46460]}>
            <Tooltip direction="right" offset={[-8, -2]} opacity={1} permanent>
              <span>Pharmacie de la Barse, François JACQUEL</span>
            </Tooltip>
          </Marker>
          <Marker position={[48.23640,4.46827]}>
            <Tooltip direction="right" offset={[-8, -2]} opacity={1} permanent>
              <span>Pharmacie de l’Orient, Pascal AVIERINOS</span>
            </Tooltip>
          </Marker>
          {/* <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=vendeuvre%20sur%20barse&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe> */}
        </MapCanvas>
      </Content>
    </Section>
  )
}

export default Contact
