import styled from "styled-components"

const FooterStyledContainer = styled.footer`
display: flex;
width: 1440px;
height: 67px;
padding: 24px 24px 24px 24px;
gap: 12px;
justify-Content: center;
align-items: center;
flex-wrap: nowrap;
position: absolute;
top: 2219px;
left: 0;
overflow: hidden;
z-index: 122
`
const FooterStyledText = styled.h6`
height: 19px;
flex-shrink: 0;
flex-basis: auto;
font-family: Inter, --default-font-family;
font-size: 16px;
font-weight: 400;
line-height: 19px;
color: #b4b4b4;
position: relative;
text-align: left;
white-space: nowrap;
z-index: 123
`

export default function Footer() {
    return (
        <FooterStyledContainer>
        <FooterStyledText>
          © 2024 Rader. All rights reserved
        </FooterStyledText>
      </FooterStyledContainer>
    )
}