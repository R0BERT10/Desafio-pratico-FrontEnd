import { MovieStyledCardButtonAction, MovieStyledCardButtonArrowBox, MovieStyledCardButtonArrowImg, MovieStyledCardButtonText, MovieStyledCardContainer, MovieStyledCardCover, MovieStyledCardEmptyStarBox, MovieStyledCardEmptyStarImg, MovieStyledCardFulStarBox, MovieStyledCardFulStarImg, MovieStyledCardLargeRateButton, MovieStyledCardRateBox, MovieStyledCardRateText, MovieStyledCardSmallRateButton, MovieStyledCardSpace, MovieStyledCardText, MovieStyledCardTextField } from "../../styled/MovieCard.styled"

type rootProps = {children?: any, imageUrl?:string, leftPosition?:number}
const Root = ({children, imageUrl, leftPosition}: rootProps) => { 
    return (
    <MovieStyledCardContainer $imageBg={imageUrl||""} $leftPosition={leftPosition||0}>
        <MovieStyledCardCover/>
        {children}
    </MovieStyledCardContainer>
)}
const RateStarFull = () => {
    return (
        <MovieStyledCardFulStarBox>
            <MovieStyledCardFulStarImg/>
        </MovieStyledCardFulStarBox>
    )
}
const RateStarEmpty = () => {
    return (
        <MovieStyledCardEmptyStarBox>
            <MovieStyledCardEmptyStarImg/>
        </MovieStyledCardEmptyStarBox>
    )
}
const ButtonArrowTrailing = () => {
    return (
        <MovieStyledCardButtonArrowBox>
            <MovieStyledCardButtonArrowImg/>
        </MovieStyledCardButtonArrowBox>
    )
}

const MovieCard = {
    Root,

    RateBox: MovieStyledCardRateBox,
    RateButtonSmall: MovieStyledCardSmallRateButton,
    RateButtonLarge: MovieStyledCardLargeRateButton,
    RateStarFull,
    RateStarEmpty,
    RateValue: MovieStyledCardRateText,

    Space: MovieStyledCardSpace,
    TextField: MovieStyledCardTextField,
    Title: MovieStyledCardText,

    ButtonAction: MovieStyledCardButtonAction,
    ButtonText: MovieStyledCardButtonText,
    ButtonArrowTrailing
}

export default MovieCard