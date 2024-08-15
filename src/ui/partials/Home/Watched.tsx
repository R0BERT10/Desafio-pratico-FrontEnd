import styled from "styled-components"
import TopActionBarNavigateSection from "../../components/navigators/TopActionBarNavigateSection"
import { defaultFontFamily } from "../../theme/font"
import { ButtonStyled, ButtonStyledText } from "../../styled/Button.styled"

const WatchedStyledSection = styled.section`
display: flex;
width: 1440px;
height: 293px;
padding: 24px 24px 24px 24px;
gap: 12px;
align-items: flex-start;
flex-wrap: nowrap;
background-color: #121212;
position: absolute;
top: 1264px;
left: 50%;
transform: translate(-49.79%, 0);
overflow: hidden;
z-index: 287
`
const WatchedStyledContainer = styled.div`
display: flex;
min-width: 0;
flex-direction: column;
gap: 12px;
align-items: flex-start;
flex-grow: 1;
flex-shrink: 0;
flex-basis: 0;
flex-wrap: nowrap;
position: relative;
overflow: hidden;
z-index: 288
`
const WatchedStyledLazyRow = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
justify-content: center;
align-items: center;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 297
`
const WatchedStyledImg = styled.div`
width: 48px;
height: 48px;
flex-shrink: 0;
background-position: center;
background-image:
  url(/images/acaaaba2-0ee6-435b-8752-6f1e580094c8.png);
background-size: cover;
background-repeat: no-repeat;
position: relative;
overflow: hidden;
z-index: 298
`
const WatchedStyledTextBox = styled.div`
width: 403px;
flex-shrink: 0;
font-family: Inter, ${defaultFontFamily};
font-size: 24px;
font-weight: 500;
line-height: 33.6px;
position: relative;
text-align: center;
text-overflow: initial;
white-space: nowrap;
z-index: 299
`
const WatchedStyledTitle = styled.span`
font-family: Inter, ${defaultFontFamily};
font-size: 24px;
font-weight: 600;
line-height: 33.6px;
color: #eeeeee;
position: relative;
text-align: center
`
const WatchedStyledSubTitle = styled.span`
font-family: Inter, ${defaultFontFamily};
font-size: 24px;
font-weight: 400;
line-height: 33.6px;
color: #eeeeee;
position: relative;
text-align: center
`
const TopNavigate = TopActionBarNavigateSection
export default function Watched() {
    return (
    <WatchedStyledSection>
        <WatchedStyledContainer>
        <TopNavigate.Root zIndex={83}>
            <TopNavigate.TitleLarge>
              Filmes assistidos
            </TopNavigate.TitleLarge>
            <TopNavigate.FieldButton>
                <TopNavigate.ButtonLeft/>
                <TopNavigate.ButtonRight/>
            </TopNavigate.FieldButton>
          </TopNavigate.Root>

          <WatchedStyledLazyRow>
            <WatchedStyledImg/>
            <WatchedStyledTextBox>
              <WatchedStyledTitle>
                Ops, nenhum filme avaliado ainda.
              </WatchedStyledTitle>
                <br/>
              <WatchedStyledSubTitle>
                Que tal adicionar um?
              </WatchedStyledSubTitle>
            </WatchedStyledTextBox>
            <ButtonStyled>
              <ButtonStyledText>
                Fazer login
              </ButtonStyledText>
            </ButtonStyled>
          </WatchedStyledLazyRow>
        </WatchedStyledContainer>
      </WatchedStyledSection>
    )
}