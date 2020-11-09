import React, { useState } from "react"
import SectionTitle from "./section_title"
import CatProDetail from "./cat_pro_detail"
import styled from "styled-components"
import { borderBox, shadow, Section } from "../styles/global"
import Img from "gatsby-image"

const ProElem = styled.li`
  ${shadow}
  ${borderBox}
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`
const GhostElem = styled(ProElem)`
  margin: 0;
  padding: 0;
`

const BottomLine = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: center;
  background-color: #F87F4A;
  height: 2px;

  ${ProElem}:hover > & {
    visibility: visible;
  }
  ${ProElem} + .selected > & {
    visibility: visible;
  }

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent #F87F4A transparent;
    transform: translateY(-100%);
  }
`
const ProList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap:wrap;
  padding: 0;
  margin-top: 20px;
`

const ProContent = styled.div`
  display:flex;
  padding: 10px;

  & > span {
    display:flex;
    align-self: center;
    text-align:center;
    overflow-wrap:break-word;
    margin-left:20px;
  }
`
const Image = styled(Img)`
  display:flex;
  width:50px;
`

const ProByCats = ({data}) => {
  const [categorieDetail, setcategorieDetail] = useState(undefined)

  const openDetail = e => {
    if (categorieDetail === e.currentTarget.id) {
      setcategorieDetail(undefined)
    } else {
      setcategorieDetail(e.currentTarget.id)
    }
  }
  const loadList = data.map(c => (
    <ProElem
      id={data.indexOf(c).toString()}
      key={data.indexOf(c).toString()}
      onClick={openDetail}
      className={
        categorieDetail == data.indexOf(c).toString() &&
        "selected"
      }
    >
      <ProContent>
        <Image fluid={c.icon.childImageSharp.fluid} />
        <span>{c.title}</span>
      </ProContent>
      <BottomLine />
    </ProElem>
  ))

  return (
    <Section id="probycategories">
      <SectionTitle title="Professionnels" color="#F87F4A" color2="#F87F4A" />
        <ProList>
          <GhostElem></GhostElem>
          {loadList}
        </ProList>
      {categorieDetail != undefined && (
        <CatProDetail
          categorieDetail={data[categorieDetail]}
        ></CatProDetail>
      )}
    </Section>
  )
}

export default ProByCats
