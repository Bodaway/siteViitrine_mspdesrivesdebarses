import React from "react"
import styled from "styled-components"

const Title = styled.h3`
  border-bottom: solid 1px #F87F4A;
  padding-bottom: 5px;
`
const SubTitle = styled.h4`
  text-decoration: underline;
  font-weight: normal;
`
const ProDescription = styled.div``
const Horaire = styled.div``
const PriseRdv = styled.div``
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
        <ProDescription>{pro.desc}</ProDescription>
        <Horaire>
          <SubTitle>Horaires :</SubTitle>
          <ul>
            <li>
              LUNDI: <span>{pro.horaire[0]}</span>
            </li>
            <li>
              MARDI: <span>{pro.horaire[1]}</span>
            </li>
            <li>
              MERCREDI: <span>{pro.horaire[2]}</span>
            </li>
            <li>
              JEUDI: <span>{pro.horaire[3]}</span>
            </li>
            <li>
              VENDREDI: <span>{pro.horaire[4]}</span>
            </li>
            <li>
              SAMEDI: <span>{pro.horaire[5]}</span>
            </li>
            <li>
              DIMANCHE: <span>{pro.horaire[6]}</span>
            </li>
          </ul>
        </Horaire>
        <PriseRdv>{pro.rdv}</PriseRdv>
        <Telephone>
          <SubTitle>Téléphone :</SubTitle>
          {pro.telephone}
        </Telephone>
      </div>
    </div>
  )
}

export default ProDetail
