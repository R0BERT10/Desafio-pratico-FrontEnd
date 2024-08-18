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

export const ModalProfileContainer = styled.div`
display: flex;
align-items: flex-end;
flex-flow: column;
position: relative;
z-index: 1;
width: 800px;
padding: 24px;
gap: 24px;
background-color: rgb(18, 18, 18);
border-radius: 24px;
border: 2px solid rgb(35, 35, 35);
box-sizing: content-box;
overflow: hidden;
margin: 20px 0px 0px 320px;
`
export const ModalProfileTitleField = styled.div`
display: flex;
min-width: 0px;
justify-content: space-between;
align-items: center;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 2;
`
export const ModalProfileTitle = styled.span`
display: flex;
width: 752px;
height: 29px;
justify-content: flex-start;
align-items: flex-start;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 24px;
font-weight: 600;
line-height: 28.8px;
color: rgb(238, 238, 238);
position: relative;
text-align: left;
white-space: nowrap;
z-index: 3;
`
export const ModalProfileCloseButton = styled.button`
width: 25px;
height: 25px;
background-position: center center;
background-image: url(public/images/Vector.svg);
background-size: 100% 100%;
background-repeat: no-repeat;
position: relative;
z-index: 5;
border: none;
background-color: transparent;
margin: 4px 10px 0px 4px;
cursor: pointer;
`
export const ModalProfileNoEssentialDataContainer = styled.div`
display: flex;
min-width: 0px;
flex-flow: column;
gap: 12px;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 6;
`
export const ModalProfileSubTDescription = styled.div`
display: flex;
flex-flow: column;
gap: 4px;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 7;
`
export const ModalProfileSubTitle = styled.span`
height: 24px;
align-self: stretch;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 20px;
font-weight: 600;
line-height: 24px;
color: rgb(238, 238, 238);
position: relative;
text-align: left;
white-space: nowrap;
z-index: 8;
`
export const ModalProfileTextDescription = styled.span`
height: 20px;
align-self: stretch;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 14px;
font-weight: 400;
line-height: 19.6px;
color: rgb(180, 180, 180);
position: relative;
text-align: left;
white-space: nowrap;
z-index: 9;
`
export const ModalProfileNoEssentialFields = styled.div`
display: flex;
height: 69px;
gap: 12px;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 10;
`
export const ModalProfileEssentialDataContainer = styled.div`
display: flex;
min-width: 0px;
flex-flow: column;
gap: 12px;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 25;
`
export const ModalProfileButtonsRowField = styled.div`
display: flex;
justify-content: space-between;
align-self: stretch;
padding: 0 10px;
`
export const ModalProfileRectangularNegativeButton = styled.button`
display: flex;
width: 166px;
padding: 55px 12px;
gap: 8px;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
background-color: rgb(61, 16, 21);
border-radius: 12px;
border: none;
position: relative;
overflow: hidden;
z-index: 40;
cursor: pointer;
height: 19px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 16px;
font-weight: 600;
line-height: 19px;
color: rgb(225, 29, 72);
text-align: left;
white-space: nowrap;
`
export const ModalProfileRectangularButton = styled.button`
display: flex;
width: 166px;
padding: 55px 12px;
gap: 8px;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
background-color: rgb(238, 238, 238);
border-radius: 12px;
border: none;
position: relative;
overflow: hidden;
z-index: 40;
cursor: pointer;
height: 19px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, var(--default-font-family);
font-size: 16px;
font-weight: 600;
line-height: 19px;
color: rgb(18, 18, 18);
text-align: left;
white-space: nowrap;
`