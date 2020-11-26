import React from "react"
import styled from "styled-components"

const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 70px;
`
export function Header(props) {
  return (
    <Inner>
      <h1>Maison de santé pluridisciplinaire des Rives de Barse</h1>
    </Inner>
  )
}
