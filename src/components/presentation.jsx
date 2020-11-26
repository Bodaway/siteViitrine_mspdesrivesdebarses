import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, borderBox, Section, mediaDevice } from "../styles/global"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"

const Content = styled.div`
  display: flex;
`

const LeftContent = styled.div`
  display: inline-block;
  height: 100%;
  width: 20%;
  overflow: hidden;
  ${borderBox}
  ${shadow}

   @media ${mediaDevice.mobileL} {
    display: none;
  }
`
const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: 60%;
  padding: 25px;
  overflow: hidden;
  ${borderBox}
  ${shadow}
    text-align: justify;
  text-justify: inter-word;

  @media ${mediaDevice.mobileL} {
    width: 100%;
  }
`
const RightContent = styled.div`
  display: inline-block;
  height: 100%;
  width: 20%;
  overflow: hidden;
  ${borderBox}
  ${shadow}

   @media ${mediaDevice.mobileL} {
    display: none;
  }
`

const Emp = styled.span`
  color: ${props => props.theme.mainColor};
  font-weight: bold;
`
const Und = styled.p`
  text-decoration: underline;
`

const ExternalCarouselV = ({ data, interval, defaultActiveIndex }) => {
const images = data.imagesV.map((i) => (<Carousel.Item>
         <Img fluid={i.childImageSharp.fluid} />
       </Carousel.Item>))

  return (
     <Carousel controls={false} indicators={false} interval={interval} defaultActiveIndex={+defaultActiveIndex}>
       {images}
     </Carousel>
  )
}
const ExternalCarouselH = ({ data, interval, defaultActiveIndex }) => {
const images = data.imagesH.map((i) => (<Carousel.Item>
         <Img fluid={i.childImageSharp.fluid} />
       </Carousel.Item>))

  return (
     <Carousel controls={false} indicators={false} interval={interval} defaultActiveIndex={+defaultActiveIndex}>
       {images}
     </Carousel>
  )
}

const Presentation = ({ data }) => {
  return (
    <Section id="presentation">
      <SectionTitle title="Présentation" />
      <Content>
        <LeftContent>
          <ExternalCarouselV defaultActiveIndex="0" data={data} interval={10000} />
          <ExternalCarouselH defaultActiveIndex="3" data={data} interval={12000} />
        </LeftContent>
        <MiddleContent>
          <Und>Description :</Und>
          <p>
            La Maison de Santé Pluridisciplinaire des Rives de Barse est{" "}
            <Emp>une structure de soins primaires multisite</Emp> composée d’une
            équipe dynamique{" "}
            <Emp>
              d'une vingtaine de professionnels médicaux et paramédicaux
            </Emp>{" "}
            (médecins généralistes, chirurgien-dentistes, sage-femmes,
            kinésithérapeutes, ostéopathes, infirmières, nutritionnistes,
            sophrologues,pharmaciens et ambulanciers). Les sites se répartissent sur la
            commune de Vendeuvre sur Barse et celle de La Villeneuve au Chêne.{" "}
            <Emp>
              L’Association Du Vendeuvrois des Professionnels de Santé (ADVPS)
            </Emp>
            , créée pour mettre en place la maison de santé en 2017, permet de
            régir le fonctionnement de cette structure labellisée et
            indépendante, sous la responsabilité d’un bureau et d’un conseil
            d’administration.
          </p>
          <Und>Historique :</Und>
          <p>
            La création de la Maison de Santé Pluridisciplinaire des Rives de Barse, située sur{" "}
            <Emp>l’ancien site SIMPA</Emp>, 1 avenue de la République à
            Vendeuvre sur Barse est le résultat de plusieurs années de{" "}
            <Emp>
              travail des professionnels de santé, en partenariat avec l’Agence
              Régionale de Santé et la Communauté de Communes de Vendeuvre
              Soulaines (CCVS)
            </Emp>
            . L'action de la la Maison de Santé s'inscrit dans le cadre d'un{" "}
            <Emp>projet de santé</Emp>, conforme à un cahier des charges
            ministériel, établi à partir d'un <Emp>diagnostic territorial</Emp>{" "}
            et témoigne d'un <Emp>exercice coordonné</Emp> entre tous les
            professionnels de santé de la structure. Elle est accessible au
            public depuis <Emp>février 2020</Emp>.
          </p>
          <Und>Activités :</Und>
          <p>
            Nous sommes un lieu privilégié pour :
            <ul>
              <li>
                <Emp>l'accès aux soins</Emp> de premiers recours (sans
                hébergement) et la <Emp>continuité des soins</Emp> (large
                amplitude d'ouverture)
              </li>
              <li>
                <Emp>l'exercice coordonné</Emp> et le{" "}
                <Emp>travail en équipe pluridisciplinaire</Emp> (réunions
                d'équipe, protocoles facilitant la prise en charge des patients,
                etc.)
              </li>
              <li>
                les <Emp>parcours de soins</Emp> fléchés et simplifiés (diabète,
                sport santé, patients complexes ou/et en situation de fragilité,
                etc.)
              </li>
              <li>
                les <Emp>actions de promotion et d'éducation à la santé</Emp>{" "}
                (dispositif de télémédecine, programmes d'Education
                Thérapeutique du Patient, actions territoriales de santé
                publique,
              </li>{" "}
              etc.)
              <li>
                la <Emp>formation universitaire</Emp> (tous les professionnels
                peuvent accueillir des étudiants en stage) et{" "}
                <Emp>post-universitaire</Emp>
              </li>
              <li>
                <Emp>la démarche qualité / RGPD</Emp>
              </li>
            </ul>
          </p>
        </MiddleContent>
        <RightContent>
          <ExternalCarouselH defaultActiveIndex="0" data={data} interval={11000} />
          <ExternalCarouselV defaultActiveIndex="2" data={data} interval={13000} />
        </RightContent>
      </Content>
    </Section>
  )
}

export default Presentation
