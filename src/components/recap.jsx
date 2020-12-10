import React from "react"
import SectionTitle from "./section_title"
import styled from "styled-components"
import { Section, mediaDevice } from "../styles/global"

const InnerRecap = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const Recap = ({ children }) => {
  return <InnerRecap>{children}</InnerRecap>
}

export default Recap
