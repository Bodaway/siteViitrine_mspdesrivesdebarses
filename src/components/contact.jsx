import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { Section, mediaDevice } from "../styles/global"

const MapOuter = styled.div`
  margin-top: ${props => props.theme.marginTopSection};
  display: flex;
  justify-content: center;
  min-height: 200px;

  @media ${mediaDevice.mobileL} {
    height: 300px;
  }
`
const MapCanvas = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: none !important;
  width: 100%;
  @media ${mediaDevice.mobileL} {
    width: 100%;
    height: 300px;
  }
`
const ProLocal = styled.div`
  & > h5 {
    color: ${props => props.theme.mainColor};
  }
  & > ul {
    list-style-image: url("./logo_small.png");
    list-style: square;
  }
  & > ul > li {
    display: flex;
    flex-direction: row;

    &::before {
      content: "\ffed";
      margin-right: 1em;
      color: ${props => props.theme.mainColor};
    }
  }
`
const Name = styled.div`
  width: 20em;
`
const Tel = styled.div``
const InnerMainPro = styled.div`
  display: flex;
  flex-direction: column;

  & > ${ProLocal} > ul {
    columns: 4;
  }
  & > ${ProLocal} > ul > li {
    margin-right: 20px;
  }
`
const OtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`
const InnerPro = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
`

const MainContact = ({ data }) => {
  return (
    <InnerMainPro>
      <iframe
        width="100%"
        height="150px"
        id="gmap_canvas"
        src={
          "https://maps.google.com/maps?q=" +
          data[0].adr_google +
          "&t=&z=16&ie=UTF8&iwloc=&output=embed"
        }
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <ProLocal>
        <h5>{data[0].location_name}</h5>
        <ul>
          {data.map(p => (
            <li>
              <Name>{p.map_label !== "" ? p.map_label : p.name}</Name>
              {/* <Tel>{p.telephone}</Tel> */}
            </li>
          ))}
        </ul>
      </ProLocal>
    </InnerMainPro>
  )
}
const OtherContact = ({ data, height }) => {
  return (
    <InnerPro>
      <iframe
        width="100%"
        height={height}
        id="gmap_canvas"
        src={
          "https://maps.google.com/maps?q=" +
          data[0].adr_google +
          "&t=&z=14&ie=UTF8&iwloc=&output=embed"
        }
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <ProLocal>
        <h5>{data[0].location_name}</h5>
        <ul>
          {data.map(p => (
            <li>
              <Name>{p.name}</Name>
              {/* <Tel>{p.telephone}</Tel> */}
            </li>
          ))}
        </ul>
      </ProLocal>
    </InnerPro>
  )
}

const Contact = ({ data }) => {
  const sortedAlpha = (pa, pb) => {
    const getSortKey = p => {
      return p.name.toUpperCase()
    }
    const keya = getSortKey(pa)
    const keyb = getSortKey(pb)
    return keya < keyb ? -1 : keya > keyb ? 1 : 0
  }
  const accu = (dic, p) => {
    ;(dic[p.adr_google] = dic[p.adr_google] || []).push(p)
    return dic
  }
  const cleanedData = data
    .map(c => c.Pros)
    .flat()
    .map(({ name, map_label, location_name, adr_google, telephone }) => ({
      name,
      map_label,
      location_name,
      adr_google,
      telephone,
    }))
    .reduce(accu, {})

  const contactPro = Object.keys(cleanedData)
    .slice(1)
    .map(k => (
      <OtherContact data={cleanedData[k].sort(sortedAlpha)} height="150px" />
    ))

  return (
    <Section id="Contact">
      <SectionTitle title="Où nous trouver" />
      <MapOuter>
        <MapCanvas>
          <MainContact
            data={cleanedData[Object.keys(cleanedData)[0]].sort(sortedAlpha)}
          />
          <OtherContainer>{contactPro}</OtherContainer>
        </MapCanvas>
      </MapOuter>
    </Section>
  )
}

export default Contact
