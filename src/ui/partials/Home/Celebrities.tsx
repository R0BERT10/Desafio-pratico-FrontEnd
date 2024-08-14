import styled from "styled-components"
import ActorCard from "../../components/dataDisplays/ActorCard"
import TopActionBarNavigateSection from "../../components/navigators/TopActionBarNavigateSection"

const CelebritiesStyledSection = styled.section`
display: flex;
width: 1440px;
height: 342.667px;
padding: 24px 24px 24px 24px;
gap: 12px;
align-items: flex-start;
flex-wrap: nowrap;
position: absolute;
top: 1900px;
left: 0;
overflow: hidden;
z-index: 81
`
const CelebritiesStyledContainer = styled.div`
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
z-index: 82
`

const CelebritiesStyledLazyRow = styled.div`
display: flex;
gap: 12px;
align-items: flex-start;
align-self: stretch;
flex-shrink: 0;
flex-wrap: nowrap;
position: relative;
z-index: 91
`
type IActorData = {name:string, age:number, imageUlr:string}
const listCardActorData : IActorData[] = [
  {name:"Ryan Reynolds", age:47, imageUlr:"/images/b76eced983a3a094a4f986d76792874cd1c9e351.png"},
  {name:"Robert Downey Jr.", age:59, imageUlr:"/images/b6b4caab8c76d8109af460c9053d02919c30ab63.png"},
  {name:"Hugh Jackman", age:55, imageUlr:"/images/6b5e26a9ab796edefc922fcdaa9281825b779095.png"},
  {name:"Zendaya", age:27, imageUlr:"/images/c60767068f48b0319de1f45e22b25e7ff73a55ad.png"},
  {name:"Dylan O'Brien", age:32, imageUlr:"/images/6465361a7737f5f9564e1a8ebd2cd912dfd646eb.png"},

]
const TopNavigate = TopActionBarNavigateSection
export default function Celebrities() {
    return (
        <CelebritiesStyledSection>
        <CelebritiesStyledContainer>
          <TopNavigate.Root zIndex={83}>
            <TopNavigate.TitleLarge>
              Celebridades
            </TopNavigate.TitleLarge>
            <TopNavigate.FieldButton>
                <TopNavigate.ButtonLeft/>
                <TopNavigate.ButtonRight/>
            </TopNavigate.FieldButton>
          </TopNavigate.Root>
          <CelebritiesStyledLazyRow>
            {listCardActorData.map(actor=> (
              <ActorCard.Root imageUrl={actor.imageUlr}>
                <ActorCard.TextField>
                  <ActorCard.PrimaryText>{actor.name}</ActorCard.PrimaryText>
                  <ActorCard.SecondaryText>{actor.age}</ActorCard.SecondaryText>
                </ActorCard.TextField>
              </ActorCard.Root>
            ))}
          </CelebritiesStyledLazyRow>
        </CelebritiesStyledContainer>
      </CelebritiesStyledSection>
    )
}