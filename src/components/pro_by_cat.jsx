import React, { useState } from "react"
import SectionTitle from "./section_title"
import CatProDetail from "./cat_pro_detail"
import styled from "styled-components"
import { borderBox, shadow } from "../styles/global"

import CatData from "../../content/categories.yaml"

const ProElem = styled.li`
  ${shadow}
  ${borderBox}
    justify-content: center;
  flex-direction: column;
  margin: 30px;
  display: inline flex;
`
const BottomLine = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2de37;
  height: 2px;

  ${ProElem}:hover > & {
    visibility: visible;
  }

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent #f2de37 transparent;
    transform: translateY(-100%);
  }
`
const ProList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const ProContent = styled.div`
  padding: 10px;
`

const ProByCats = () => {
  const [divDetailVisibility, setDivDetailVisibility] = useState("none")
  const [categorieDetail, setcategorieDetail] = useState(undefined)

  const openDetail = e => {
    if (categorieDetail === e.currentTarget.id) {
      setDivDetailVisibility("none")
      setcategorieDetail(undefined)
    } else {
      setDivDetailVisibility("flex")
      setcategorieDetail(e.currentTarget.id)
    }
  }
  const loadList = CatData.Categories.map(c => (
    <ProElem
      id={CatData.Categories.indexOf(c).toString()}
      key={CatData.Categories.indexOf(c).toString()}
      onClick={openDetail}
    >
      <ProContent>
        <img src="" alt="" />
        <span>{c.title}</span>
      </ProContent>
      <BottomLine />
    </ProElem>
  ))

  console.log('categorieDetail: ' + CatData.Categories[categorieDetail])
  return (
    <section id="probycategories">
      <SectionTitle title="Professionnels" color="#f2de37" color2="#f2de37"/>
      <div class="prodiv">
        <ProList>{loadList}</ProList>
      </div>
      {categorieDetail != undefined && (
        <CatProDetail
          categorieDetail={CatData.Categories[categorieDetail]}
        ></CatProDetail>
      )}
    </section>
  )
}

export default ProByCats
