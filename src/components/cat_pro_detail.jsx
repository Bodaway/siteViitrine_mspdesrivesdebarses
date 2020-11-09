import React, { useState } from "react"
import styled from "styled-components"
import { borderBox, shadow } from "../styles/global"
import ProDetail from "./pro_detail"
import Img from "gatsby-image"

const InnerDetail = styled.div`
  display: flex;
  ${shadow}
  ${borderBox}
    margin:30px;
  padding: 25px;
  overflow:hidden;
`
const LeftContent = styled.div`
  display: flex;
  flex: 4 4;
  flex-direction: column;
  padding-right: 25px;
  padding-left: 25px;
  border-right: solid 1px #f4f4f4;
`
const Image = styled(Img)`
  height: 0;
  width: 15%;
  padding-bottom: 15%;
`
const CategoryTitle = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > ${Image} {
    margin-right: 20px;
  }

  & > h3 {
    align-self: center;
    text-align: center;
  }
`

const CenterContent = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
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
  flex: 6 3;
  flex-direction: column;
  padding-right: 25px;
  padding-left: 25px;
`

const CatProDetail = ({ categorieDetail}) => {
  const [selectedPro, setSelectedPro] = useState(0)

  const Proselected = e => {
    setSelectedPro(e.currentTarget.id)
  }

  const getLine = () => {
    if (categorieDetail == undefined || categorieDetail.Pros == undefined) {
      return ""
    }
    return categorieDetail.Pros.map(p => {
      return (
        <ProElem
          id={categorieDetail.Pros.indexOf(p).toString()}
          key={categorieDetail.Pros.indexOf(p).toString()}
          onClick={Proselected}
          className={
            categorieDetail.Pros.indexOf(p) == selectedPro && "selected"
          }
        >
          <ProName>{p.name}</ProName>
          <Vline />
        </ProElem>
      )
    })
  }

  return (
    <InnerDetail>
      <LeftContent className="d-none d-md-block">
        <CategoryTitle>
          <Image fluid={categorieDetail.icon.childImageSharp.fluid} />
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
        {categorieDetail.Pros != undefined && (
          <ProDetail pro={categorieDetail.Pros[selectedPro]} />
        )}
      </RightContent>
    </InnerDetail>
  )
}

export default CatProDetail
