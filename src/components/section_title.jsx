import React from "react"
import styled from "styled-components"
import { borderBox } from "../styles/global"

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  white-space: nowrap;
  height: 15%;
  min-height: 50px;
  height: 50px;
  width: 60%;
  background: ${props => props.color };

  &::after {
    align-self: flex-end;
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-color: ${props => props.color2} transparent transparent transparent;
    content: "";
    width: 0;
    height: 0;
    transform: translateY(99%);
  }
`
const Title = styled.h2`
  display: flex;
  align-self: center;
  text-align: center;
  margin: 0;
  font-family: arial;
  font-size: 16px;
  padding: 0 10px;
  text-transform: uppercase;
  color: #fff;
  ${borderBox}
`
const SectionTitle = ({ title, color, color2 }) => {
  return (
    <Header color={color} color2={color2} >
      <Title >{title}</Title>
    </Header>
  )
}

export default SectionTitle
