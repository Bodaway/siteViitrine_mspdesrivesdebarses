import { css } from "styled-components"
import styled from "styled-components"

export const shadow = css`
  -moz-box-shadow: 0px 3px 10px 0px #cfcfcf;
  -webkit-box-shadow: 0px 3px 10px 0px #cfcfcf;
  -o-box-shadow: 0px 3px 10px 0px #cfcfcf;
  box-shadow: 0px 3px 10px 0px #cfcfcf;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#cfcfcf, Direction=180, Strength=10);
`
export const borderBox = css`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`
export const Section = styled.section`
  display: relative;
  padding-top: 100px;
`
