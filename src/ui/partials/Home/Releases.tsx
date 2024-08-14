import styled from "styled-components"
import TopActionBarNavigateSection from "../../components/navigators/TopActionBarNavigateSection"
import MovieCard from "../../components/dataDisplays/MovieCard"

const ReleasesStyledSection = styled.section`
display: flex;
width: 1440px;
height: 342.667px;
padding: 24px 24px 24px 24px;
gap: 12px;
align-items: flex-start;
flex-wrap: nowrap;
position: absolute;
top: 946px;
left: 50%;
transform: translate(-49.79%, 0);
overflow: hidden;
z-index: 140
`
const ReleasesStyledContainer = styled.div`
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
z-index: 141
`
const ReleasesStyledLazyRow = styled.div`
height: 253.667px;
align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 150
`
const TopNavigate = TopActionBarNavigateSection

type IMovieData = {movie:string, rate:number, imageUlr:string, position:number}
const listCardMovieData : IMovieData[] = [
  {movie:"O Exorcismo", rate:4.1, imageUlr:"/images/fe194c98b5ddd4c77ac2add7eb566383eb306337.png", position:0},
  {movie:"Tuesday - O Último Abraço", rate:6.4, imageUlr:"/images/1e206ae3360386853fb20448d0f058be2dbe4904.png", position:351},
  {movie:"Tô de Graça: O Filme", rate:6.0, imageUlr:"/images/da431f0e3dacbe16cfef7913926ac510ce6bb15a.png", position:702},
  {movie:"Meu Pai é um Perigo", rate:5.7, imageUlr:"/images/03c25af49d54f1c5d7f6805520a89798c76d08c4.png", position:1053}
]

export default function Releases() {
    return (
        <ReleasesStyledSection>
        <ReleasesStyledContainer>
          <TopNavigate.Root zIndex={142}>
            <TopNavigate.TitleLarge>Ultimos lançamentos</TopNavigate.TitleLarge>
            <TopNavigate.FieldButton>
              <TopNavigate.ButtonLeft/>
              <TopNavigate.ButtonRight/>
            </TopNavigate.FieldButton>
          </TopNavigate.Root>
          
          <ReleasesStyledLazyRow>

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
          </ReleasesStyledLazyRow>
        </ReleasesStyledContainer>
      </ReleasesStyledSection>
    )
}