import styled from "styled-components"
import { defaultFontFamily } from "../theme/font"

export const MovieStyledCardContainer = styled.div<{ $imageBg:string, $leftPosition:number }>`
display: flex;
width: 339px;
height: 253.667px;
padding: 12px 12px 12px 12px;
flex-direction: column;
gap: 12px;
justify-content: flex-end;
align-items: flex-start;
flex-wrap: nowrap;
background-color: rgba(0, 0, 0, 0.1);
background-position: center;
background-image:
  url(${props => props.$imageBg});
background-size: cover;
background-repeat: no-repeat;
border-radius: 24px;
position: absolute;
top: 0;
left: ${props => props.$leftPosition}px;
overflow: hidden;
z-index: 151
`
export const MovieStyledCardCover = styled.div`
width: 339px;
height: 254px;
flex-shrink: 0;
background-position: center;
background-image:
  url(/images/fb540d13-049d-4385-9f4c-678ea27c5332.png);
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
left: 0.5px;
z-index: 152
`
export const MovieStyledCardRateBox = styled.div`
display: flex;
width: 103px;
gap: 12px;
align-items: center;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 153
`
export const MovieStyledCardLargeRateButton = styled.button`
display: flex;
width: 59px;
padding: 4px 4px 4px 4px;
gap: 4px;
justify-content: center;
align-items: center;
flex-shrink: 0;
flex-wrap: nowrap;
background-color: rgba(255, 255, 255, 0.2);
border-radius: 8px;
border: none;
position: relative;
backdrop-filter: blur(6px);
z-index: 154;
cursor: pointer
`
export const MovieStyledCardSmallRateButton = styled.div`
display: flex;
width: 32px;
padding: 4px 4px 4px 4px;
gap: 4px;
justify-content: center;
align-items: center;
flex-shrink: 0;
flex-wrap: nowrap;
background-color: rgba(255, 255, 255, 0.2);
border-radius: 8px;
position: relative;
backdrop-filter: blur(6px);
z-index: 158
`
export const MovieStyledCardFulStarBox = styled.div`
width: 20px;
height: 20px;
flex-shrink: 0;
position: relative;
overflow: hidden;
z-index: 155
`
export const MovieStyledCardFulStarImg = styled.div`
width: 18.667px;
height: 17.85px;
background-position: center;
background-image:
  url(/images/cb24f49a-c701-444b-8aa0-776f8a9e5276.png);
background-size: 100% 100%;
background-repeat: no-repeat;
position: relative;
z-index: 156;
margin: 0.67px 0 0 0.67px
`
export const MovieStyledCardEmptyStarBox = styled.div`
width: 24px;
height: 24px;
flex-shrink: 0;
position: relative;
overflow: hidden;
z-index: 159
`
export const MovieStyledCardEmptyStarImg = styled.div`
width: 22px;
height: 21.02px;
background-position: center;
background-image:
  url(/images/1a3cc10a-9c4b-4263-9cbc-b6582ad5675b.png);
background-size: 100% 100%;
background-repeat: no-repeat;
position: relative;
z-index: 160;
margin: 1px 0 0 1px
`
export const MovieStyledCardRateText = styled.span`
height: 24px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, ${defaultFontFamily};
font-size: 20px;
font-weight: 600;
line-height: 24px;
color: #eeeeee;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 157
`
export const MovieStyledCardSpace = styled.div`
width: 10px;
min-height: 0;
flex-grow: 1;
flex-shrink: 0;
flex-basis: 0;
background-color: rgba(0, 0, 0, 0);
position: relative;
z-index: 161
`
export const MovieStyledCardTextField = styled.div`
display: flex;
min-width: 0;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 162
`
export const MovieStyledCardText = styled.span`
height: 23px;
align-self: stretch;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, ${defaultFontFamily};
font-size: 24px;
font-weight: 700;
line-height: 22.4px;
color: #eeeeee;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 163
`
export const MovieStyledCardButtonAction = styled.button`
display: flex;
width: 184px;
height: 40px;
padding: 12px 12px 12px 12px;
gap: 8px;
justify-content: center;
align-items: center;
flex-shrink: 0;
flex-wrap: nowrap;
background-color: rgba(238, 238, 238, 0.25);
border-radius: 12px;
border: none;
position: relative;
overflow: hidden;
backdrop-filter: blur(6px);
box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
z-index: 164;
cursor: pointer
`
export const MovieStyledCardButtonText = styled.span`
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
z-index: 165
`
export const MovieStyledCardButtonArrowBox = styled.div`
width: 20px;
height: 20px;
flex-shrink: 0;
position: relative;
overflow: hidden;
z-index: 166
`
export const MovieStyledCardButtonArrowImg = styled.div`
width: 12.817px;
height: 15.343px;
background-position: center;
background-image:
  url(/images/97b21ba8-581c-4e17-b528-5ce405b46a0e.png);
background-size: 100% 100%;
background-repeat: no-repeat;
position: relative;
z-index: 167;
margin: 2.328px 0 0 4px
`