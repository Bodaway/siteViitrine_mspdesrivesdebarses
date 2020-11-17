import React from "react"
import styled from "styled-components"
import { borderBox, mediaDevice } from "../styles/global"
import { Navbar, Nav } from "react-bootstrap"

const InnerNavbar = styled(Navbar)`
  border-bottom: solid 1px #cdcdce;
  background-color: #eaeaea;
  white-space: nowrap;
  ${borderBox}
  -moz-box-shadow: 0px 3px 10px 0px #f5f5f5;
  -webkit-box-shadow: 0px 3px 10px 0px #f5f5f5;
  -o-box-shadow: 0px 3px 10px 0px #f5f5f5;
  box-shadow: 0px 3px 10px 0px #f5f5f5;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#f5f5f5, Direction=180, Strength=10);
`
const Collapse = styled(Navbar.Collapse)`
  @media ${mediaDevice.greaterthtablet} {
    display: flex;
    justify-content: center;
  }
`

const Elem = styled.div`
  display: inline flex;
  flex-direction: column;
  padding: 0 40px;
  ${borderBox}
`
const Link = styled(Nav.Link)`
  font-size: 14px;
  font-family: arial;
  color: #808080;
  text-decoration: none;
  text-transform: uppercase;
`
const Line = styled.div`
    display: flex;
    visibility: hidden;
    justify-content: center;
    margin-top: 10px;
    height: 2px;
    //width:70%;

    @media ${mediaDevice.tablet} {
      display:none;
    }

    ${Elem}:hover > & {
      visibility: visible;
    }
    ${Elem} > ${Link}.selected {
      visibility: visible;
    }

    &::before {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      //left:50%;
      //bottom:100%;
      border-style: solid;
      border-width: 0 4px 4px 4px;
      transform: translateY(-100%);
    }
  `
const LinePresentation = styled(Line)`
  background-color: ${props => props.theme.presentationColor};

  &::before {
    border-color: transparent transparent
      ${props => props.theme.presentationColor} transparent;
  }
`
const LineCategorie = styled(Line)`
  background-color: ${props => props.theme.categorieColor};

  &::before {
    border-color: transparent transparent ${props => props.theme.categorieColor}
      transparent;
  }
`
const LineActualite = styled(Line)`
  background-color: ${props => props.theme.actualiteColor};

  &::before {
    border-color: transparent transparent ${props => props.theme.actualiteColor}
      transparent;
  }
`
const LineContact = styled(Line)`
  background-color: ${props => props.theme.contactColor};

  &::before {
    border-color: transparent transparent ${props => props.theme.contactColor}
      transparent;
  }
`
const Menu = () => {
  return (
    <InnerNavbar bg="light" expand="lg" sticky="top" collapseOnSelect="true">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Collapse id="basic-navbar-nav">
        <Nav>
          <Elem>
            <Link href="#presentation">Présentation</Link>
            <LinePresentation />
          </Elem>
          <Elem>
            <Link href="#probycategories">Professionnels</Link>
            <LineCategorie />
          </Elem>
          <Elem>
            <Link href="#actualitelarge">Actualités</Link>
            <LineActualite />
          </Elem>
          <Elem>
            <Link href="#Contact">Contact</Link>
            <LineContact />
          </Elem>
        </Nav>
      </Collapse>
    </InnerNavbar>
  )
}

export default Menu
