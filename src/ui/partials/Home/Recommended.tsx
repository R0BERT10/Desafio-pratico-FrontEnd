import styled from "styled-components"
import TopActionBarNavigateSection from "../../components/navigators/TopActionBarNavigateSection"
import MovieCard from "../../components/dataDisplays/MovieCard"

const RecommendedStyledSection = styled.section`
display: flex;
width: 1440px;
height: 342.667px;
padding: 24px 24px 24px 24px;
gap: 12px;
align-items: flex-start;
flex-wrap: nowrap;
position: relative;
overflow: hidden;
z-index: 302;
margin: 611px 0 0 3px
`
const RecommendedStyledContainer = styled.div`
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
z-index: 303
`
const RecommendedStyledLazyRow = styled.div`
height: 253.667px;
align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 313
`
const TopNavigate = TopActionBarNavigateSection

type IMovieData = {movie:string, rate:number, imageUlr:string, position:number}
const listCardMovieData : IMovieData[] = [
  {movie:"Planeta dos Macacos", rate:7.0, imageUlr:"/images/c40d2f8ff6d2e17d38080e9490c54aea8a7c396f.png", position:0},
  {movie:"Logan", rate:8.1, imageUlr:"/images/34b26483cbcd885cc509e5a509db56953fc793ca.png", position:351},
  {movie:"Oppenheimer", rate:8.3, imageUlr:"/images/8ddfc583944a8de46b04d28d624c8a02be491835.png", position:702},
  {movie:"Guerra Civil", rate:7.1, imageUlr:"/images/dde3adbec43188ddf1eb74c9bc61d3ed5e415d50.png", position:1053}
]
export default function Recommended() {
    return (
        <RecommendedStyledSection>
        <RecommendedStyledContainer>

          <TopNavigate.Root zIndex={304}>
            <TopNavigate.Title>
              Recomendados
            </TopNavigate.Title>
            <TopNavigate.Description>
              <TopNavigate.Text>
                Faça
              </TopNavigate.Text>
              <TopNavigate.SpecialText>
                login
              </TopNavigate.SpecialText>
              <TopNavigate.Text>
                para recomendações personalizadas!
              </TopNavigate.Text>
            </TopNavigate.Description>
            <TopNavigate.FieldButton>
              <TopNavigate.ButtonLeft/>
              <TopNavigate.ButtonRight/>
            </TopNavigate.FieldButton>
          </TopNavigate.Root>

          <RecommendedStyledLazyRow>
          {listCardMovieData.map(movie => (
              <MovieCard.Root imageUrl={movie.imageUlr} leftPosition={movie.position}>
              <MovieCard.RateBox>
                <MovieCard.RateButtonLarge>
                  <MovieCard.RateStarFull/>
                  <MovieCard.RateValue>
                    {movie.rate}
                  </MovieCard.RateValue>
                </MovieCard.RateButtonLarge>
                <MovieCard.RateButtonSmall>
                  <MovieCard.RateStarEmpty/>
                </MovieCard.RateButtonSmall>
              </MovieCard.RateBox>
              <MovieCard.Space/>
              <MovieCard.TextField>
                <MovieCard.Title>
                  {movie.movie}
                </MovieCard.Title>
              </MovieCard.TextField>
              <MovieCard.ButtonAction>
                <MovieCard.ButtonText>
                  Assistir ao trailer
                </MovieCard.ButtonText>
                <MovieCard.ButtonArrowTrailing/>
              </MovieCard.ButtonAction>
            </MovieCard.Root>
            ))}
            
          </RecommendedStyledLazyRow>
        </RecommendedStyledContainer>
      </RecommendedStyledSection>
    )
}