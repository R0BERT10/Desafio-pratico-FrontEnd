import styled from "styled-components"

export const InputStyledElementContainer = styled.div`
display: flex;
flex-flow: column;
gap: 4px;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 6;
`
export const InputStyledElementTitleField = styled.div`
display: flex;
width: 115px;
align-items: center;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 7;
`
export const InputStyledElementTitle = styled.span`
height: 17px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 14px;
font-weight: 600;
line-height: 16.943px;
color: rgb(238, 238, 238);
position: relative;
text-align: left;
white-space: nowrap;
z-index: 8;
`
export const InputStyledElementMandatory = styled.span`
height: 17px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 14px;
font-weight: 600;
line-height: 16.943px;
color: rgb(225, 29, 72);
position: relative;
text-align: left;
white-space: nowrap;
z-index: 9;
`
export const InputStyledElementInput = styled.input`
display: flex;
//height: 48px;
padding: 12px;
gap: 8px;
align-items: center;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
background-color: rgb(35, 35, 35);
border-radius: 12px;
position: relative;
z-index: 10;
height: 25px;
width: 381px;
border: none;
top: 0px;
left: 0px;
color: rgb(238, 238, 238);
outline: none;
::placeholder{
  color: rgb(180, 180, 180);
}
`
export const InputStyledElementTextError = styled.span`
display: flex;
width: 350px;
height: 12px;
justify-content: flex-start;
align-items: flex-start;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 12px;
font-weight: 400;
line-height: 12px;
color: rgb(225, 29, 72);
position: absolute;
top: 73px;
left: 0px;
text-align: left;
white-space: nowrap;
z-index: 13;
`