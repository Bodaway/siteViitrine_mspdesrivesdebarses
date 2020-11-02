import React from "react"
import styled from "styled-components"

export function Header(props) {
  const Inner = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 70px;
  `
  return (
    <Inner>
      <h1>Maison de santé pluriprofessionnelle des rives de barse</h1>
    </Inner>
  )
}
