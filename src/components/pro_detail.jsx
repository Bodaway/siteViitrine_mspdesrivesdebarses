import React from "react"
import styled from "styled-components"

const Title = styled.h3`
  border-bottom: solid 1px ${props => props.theme.mainColor};
  padding-bottom: 5px;
`
const SubTitle = styled.h4`
  text-decoration: underline;
  font-weight: normal;
`
const ProDescription = styled.div``
const Horaire = styled.div``
const Jour = styled.li`
display:flex;
flex-direction:row;
`
const JourTitre = styled.div`
  width:100px;
`
const JourDesc = styled.div``
const PriseRdv = styled.div`
  padding-bottom: 10px;
`
const Telephone = styled.div``

const ProDetail = ({
  pro = {
    name: "",
    desc: "",
    horaire: ["-", "-", "-", "-", "-", "-", "-"],
    rdv: "",
    telephone: "",
  },
}) => {
  return (
    <div>
      <Title>{pro.name}</Title>
      <div>
        <ProDescription
          dangerouslySetInnerHTML={{
            __html: pro.desc,
          }}
        ></ProDescription>
        <Horaire>
          <SubTitle>Horaires :</SubTitle>
          <ul>
            <Jour><JourTitre>LUNDI: </JourTitre><JourDesc>{pro.horaire[0]}</JourDesc></Jour>
            <Jour><JourTitre>MARDI: </JourTitre><JourDesc>{pro.horaire[1]}</JourDesc></Jour>
            <Jour><JourTitre>MERCREDI: </JourTitre><JourDesc>{pro.horaire[2]}</JourDesc></Jour>
            <Jour><JourTitre>JEUDI: </JourTitre><JourDesc>{pro.horaire[3]}</JourDesc></Jour>
            <Jour><JourTitre>VENDREDI: </JourTitre><JourDesc>{pro.horaire[4]}</JourDesc></Jour>
            <Jour><JourTitre>SAMEDI: </JourTitre><JourDesc>{pro.horaire[5]}</JourDesc></Jour>
            <Jour><JourTitre>DIMANCHE: </JourTitre><JourDesc>{pro.horaire[6]}</JourDesc></Jour>
          </ul>
        </Horaire>
        <PriseRdv
          dangerouslySetInnerHTML={{
            __html: pro.rdv,
          }}
        ></PriseRdv>
        <Telephone>
          <SubTitle>Téléphone :</SubTitle>
          {pro.telephone}
        </Telephone>
      </div>
    </div>
  )
}

export default ProDetail
