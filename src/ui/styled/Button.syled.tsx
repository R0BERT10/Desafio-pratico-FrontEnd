import styled from "styled-components";
import { defaultFontFamily } from "../theme/font";

export const ButtonStyled = styled.button`
display: flex;
width: 133px;
height: 40px;
padding: 12px 24px 12px 24px;
gap: 8px;
justify-content: center;
align-items: center;
flex-shrink: 0;
flex-wrap: nowrap;
background-color: #232323;
border-radius: 12px;
border: none;
position: relative;
overflow: hidden;
z-index: 300;
cursor: pointer
`

export const ButtonStyledText = styled.span`
height: 19px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, ${defaultFontFamily};
font-size: 16px;
font-weight: 600;
line-height: 19px;
color: #eeeeee;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 301
`