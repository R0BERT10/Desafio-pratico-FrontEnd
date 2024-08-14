import styled from "styled-components"
import { defaultFontFamily } from "../theme/font"

export const ActorStyledCardContainer = styled.div<{ $imageBg:string }>`
width: '268.8px';
height: 253.667px;
flex-shrink: 0;
background-position: center;
background-image:
  url(${props => props.$imageBg});
background-size: cover;
background-repeat: no-repeat;
border-radius: 24px;
position: relative;
overflow: hidden;
z-index: 92
`
export const ActorStyledCardTextCenterFields = styled.div`
display: flex;
width: 244.8px;
flex-direction: column;
gap: 4px;
align-items: flex-start;
flex-wrap: nowrap;
position: relative;
z-index: 94;
margin: 218px 0 0 12px
` 
export const ActorStyledCardTextFields = styled.div`
display: flex;
min-width: 0;
gap: 4px;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 95
`
export const ActorStyledCardText = styled.span`
height: 23px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, ${defaultFontFamily};
font-size: 20px;
font-weight: 700;
line-height: 22.4px;
color: #eeeeee;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 96
`
export const ActorStyledCardTextSecondary = styled.span`
height: 23px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, ${defaultFontFamily};
font-size: 14px;
font-weight: 400;
line-height: 22.4px;
color: #b4b4b4;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 97
`
export const ActorStyledCardCover = styled.div`
width: 269px;
height: 254px;
background-position: center;
background-image:
  url(/images/aed0e778-db1f-4025-9edd-8352fadaf9b8.png);
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
left: 0;
z-index: 93
`