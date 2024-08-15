import styled from "styled-components"

export const ModalStyledBody = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgb(0, 0, 0, 0.7);
z-index: 100000;
`

export const ModalStyledContainer = styled.div`
display: flex;
width: 477px;
padding: 48px 48px 48px 48px;
flex-direction: column;
gap: 64px;
align-items: center;
flex-wrap: nowrap;
background-color: #121212;
border-radius: 24px;
border: 4px solid #232323;
position: relative;
overflow: hidden;
z-index: 1;
margin: 0 0 0 481px;
`
export const ModalStyledCenterBox = styled.div`
display: flex;
flex-flow: column;

gap: 24px;align-items: 
flex-start;
//align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 2;
`

export const ModalStyledTitleField = styled.div`
display: flex;
width: 381px;
flex-flow: column;
gap: 4px;
align-items: center;
flex-shrink: 0;
position: relative;
z-index: 3;
`
export const ModalStyledTitle = styled.span`
min-width: 0px;
height: 39px;
align-self: stretch;
flex-shrink: 0;
flex-basis: auto;
font-family: Hero New, var(--default-font-family);
font-size: 32px;
font-weight: 600;
line-height: 38.4px;
color: rgb(238, 238, 238);
position: relative;
text-align: center;
white-space: nowrap;
z-index: 4;
`
export const ModalStyledSubTitle = styled.span`
height: 20px;
flex-shrink: 0;
flex-basis: auto;
font-family: Hero New, var(--default-font-family);
font-size: 14px;
font-weight: 400;
line-height: 19.6px;
color: rgb(180, 180, 180);
position: relative;
text-align: left;
white-space: nowrap;
z-index: 5;
`
export const ModalStyledForm = styled.form`
display: flex;
flex-direction: column;
`

export const ModalStyledFooterBox = styled.div`
width: 240px;
flex-shrink: 0;
font-family: Hero New, var(--default-font-family);
font-size: 16px;
font-weight: 400;
line-height: 24px;
position: relative;
text-align: left;
text-overflow: initial;
white-space: nowrap;
z-index: 44;
`

export const ModalStyledFooterTextCenter = styled.span`
font-family: Hero New, var(--default-font-family);
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: rgb(180, 180, 180);
position: relative;
text-align: left;
`

export const ModalStyledTextAnchor = styled.a`
font-family: Hero New, var(--default-font-family);
font-size: 16px;
font-weight: 600;
line-height: 24px;
color: rgb(238, 238, 238);
position: relative;
text-align: left;
cursor: pointer;
`