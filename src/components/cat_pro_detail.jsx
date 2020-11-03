import React, { useState } from "react"
import styled from "styled-components"
import { borderBox, shadow } from "../styles/global"
import ProDetail from "./pro_detail"
import CatData from "../../content/categories.yaml"

const InnerDetail = styled.div`
  display: flex;
  ${shadow}
  ${borderBox}
    margin:30px;
  padding: 25px;
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-right: 25px;
  padding-left: 25px;
  border-right: solid 1px #f4f4f4;
`
const CategoryTitle = styled.div`
  display: flex;

  & img {
    margin-right: 10px;
  }
`

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding-right: 25px;
  padding-left: 25px;
  border-right: solid 1px #f4f4f4;
`
const ProElem = styled.li`
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`
const ProName = styled.div``
const Vline = styled.div`
  visibility: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 5px;
  margin-bottom: 2px;
  background-color: #f2de37;

  ${ProElem}:hover > & {
    visibility: visible;
  }

  ${ProElem} + .selected > & {
    visibility: visible;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    //top: 50%;
    //right: 0px;
    //margin-top: -10px;
    border-style: solid;
    border-width: 4px 4px 4px 4px;
    border-color: transparent #f2de37 transparent transparent;
    transform: translateX(-100%);
  }
`
const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding-right: 25px;
    padding-left: 25px;
  `

const CatProDetail = ({ visible, categorieDetail }) => {
  const [selectedPro, setSelectedPro] = useState(-1)

  const proSelected = e => {
    setSelectedPro(e.currentTarget.id)
  }

  const getLine = () => {
    if (categorieDetail == undefined || categorieDetail.pros == undefined) {
      return ""
    }
    return categorieDetail.pros.map(p => {
      return (
        <ProElem
          id={categorieDetail.pros.indexOf(p).toString()}
          key={categorieDetail.pros.indexOf(p).toString()}
          onClick={proSelected}
          className={
            categorieDetail.pros.indexOf(p) == selectedPro && "selected"
          }
        >
          <ProName>{p.name}</ProName>
          <Vline />
        </ProElem>
      )
    })
  }

  return (
    <InnerDetail visible={visible}>
      <LeftContent>
        <CategoryTitle>
          <img src="" alt="title_img" />
          <h3>{categorieDetail != undefined ? categorieDetail.title : ""}</h3>
        </CategoryTitle>
        <div>{categorieDetail != undefined ? categorieDetail.desc : ""}</div>
      </LeftContent>
      <CenterContent>
        <ul>
          <ProElem></ProElem>{" "}
          {/* Empty element, using for avoiding a graphical bug with the zero element. */}
          {getLine()}
        </ul>
      </CenterContent>
      <RightContent>
        { categorieDetail.pros != undefined && 
        <ProDetail
          pro={categorieDetail.pros[selectedPro]}
        /> }
      </RightContent>
    </InnerDetail>
  )
}

export default CatProDetail
