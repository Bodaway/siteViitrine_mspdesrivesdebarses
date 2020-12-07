import React, { useState } from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, Section } from "../styles/global"
import { Modal } from "react-bootstrap"
import Img from "gatsby-image"

const Inner = styled.div`
  display: flex;
  justify-content: center;

  & p {
    margin-top: ${props => props.theme.marginTopSection};
    width: 60%;
    text-align: justify;
  }
`

const Recrutement = ({ data }) => {
  return (
    <Section id="recrutement">
      <SectionTitle title="Recrutement" />
      <Inner>
        <p>
          La Communauté de Communes de VENDEUVRE - SOULAINES recherche :
          <ul>
            <li>
              un médecin généraliste (H/F) pour une installation à
              Vendeuvre-sur-Barse (
              <a href="20201126_FICHE DE POSTE MEDECINS_MSP VSB_V1.pdf">
                Fiche de poste
              </a>
              ).
            </li>
          </ul>
        </p>
      </Inner>
    </Section>
  )
}

export default Recrutement
