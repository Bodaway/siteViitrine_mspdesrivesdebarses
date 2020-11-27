import React, { useState } from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { shadow, Section } from "../styles/global"
import { Modal } from "react-bootstrap"
import Img from "gatsby-image"

const Inner = styled.div`
    display:flex;
`

const Recrutement = ({data}) => {
    return (
        <Section id="recrutement">
            <SectionTitle title="Recrutement" />
         <Inner>
             <Img fluid={data.image.childImageSharp.fluid} />
             </Inner>   
        </Section>
    )
}

export default Recrutement