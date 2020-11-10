import React from "react"
import styled from "styled-components"
import { borderBox } from "../styles/global"

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 70px;
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
const ListMenu = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
`

const Elem = styled.li`
  display: inline flex;
  flex-direction: column;
  padding: 0 40px;
  ${borderBox}
`
const Link = styled.a`
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
    background-color: ${props => props.color};
    margin-top: 10px;
    height: 2px;
    //width:70%;

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
      border-color: transparent transparent ${props => props.color} transparent;
      transform: translateY(-100%);
    }
  `
const Menu = () => {
  return (
    <Nav>
       <div class="burger-mobile">
        <div class="burger-line first"></div>
        <div class="burger-line second"></div>
        <div class="burger-line third"></div>
      </div> 
      <ListMenu>
        <Elem>
          <Link href="#presentation">Présentation</Link>
          <Line color="#68C100" />
        </Elem>
        <Elem>
          <Link href="#probycategories">Professionnels</Link>
          <Line color="#f87f4a" />
        </Elem>
        <Elem>
          <Link href="#actualitelarge">Actualités</Link>
          <Line color="#E7302A" />
        </Elem>
        <Elem>
          <Link href="#Contact">Contact</Link>
          <Line color="#555555" />
        </Elem>
      </ListMenu>
    </Nav>
  )
}

export default Menu
