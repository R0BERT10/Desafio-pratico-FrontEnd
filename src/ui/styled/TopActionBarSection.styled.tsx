import styled from "styled-components";
import { defaultFontFamily } from "../theme/font";

export const TopActionBarStyledContainer = styled.div<{ $zIndex:number }>`
display: flex;
gap: 8px;
align-items: center;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: ${props => props.$zIndex}
`
export const TopActionBarStyledPipe = styled.div`
width: 4px;
align-self: stretch;
flex-shrink: 0;
background-color: #eeeeee;
border-radius: 9px;
position: relative;
z-index: 84
`
export const TopActionBarStyledTitleLarge = styled.span`
height: 29px;
flex-grow: 1;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, ${defaultFontFamily};
font-size: 24px;
font-weight: 600;
line-height: 28.8px;
color: #eeeeee;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 85
`
export const TopActionBarStyledTitle = styled.span`
height: 29px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, ${defaultFontFamily};
font-size: 24px;
font-weight: 600;
line-height: 28.8px;
color: #eeeeee;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 306
`
export const TopActionBarStyledDescriptionField = styled.div`
width: 1111px;
flex-grow: 1;
flex-shrink: 0;
flex-basis: 0;
font-family: Inter, ${defaultFontFamily};
font-size: 16px;
font-weight: 400;
line-height: 20.8px;
position: relative;
text-align: left;
text-overflow: initial;
white-space: nowrap;
z-index: 307
`
export const TopActionBarStyledText = styled.span`
font-family: Inter, ${defaultFontFamily};
font-size: 16px;
font-weight: 400;
line-height: 20.8px;
color: #b4b4b4;
position: relative;
text-align: left
`
export const TopActionBarStyledTextEspecial = styled.span`
font-family: Inter, ${defaultFontFamily};
font-size: 16px;
font-weight: 600;
line-height: 20.8px;
color: #eeeeee;
position: relative;
text-align: left
`
export const TopActionBarStyledNavigateButtons = styled.div`
display: flex;
width: 72px;
gap: 24px;
align-items: center;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 86
`
export const TopActionBarStyledTopNavigateButtonLeft = styled.div`
width: 24px;
height: 24px;
flex-shrink: 0;
position: relative;
overflow: hidden;
z-index: 87;
background-position: center;
background-image:
  url(/images/46f2a57d-05fc-4039-b34e-b7b4e0e6e9fb.png);
background-size: 40% 60%;
background-repeat: no-repeat;
`
export const TopActionBarStyledNavigateButtonRight = styled.div`
width: 24px;
height: 24px;
flex-shrink: 0;
position: relative;
overflow: hidden;
z-index: 87;
background-position: center;
background-image:
  url(/images/09386f6e-d768-4516-af8b-9bee10ec642f.png);
background-size: 40% 60%;
background-repeat: no-repeat;
`