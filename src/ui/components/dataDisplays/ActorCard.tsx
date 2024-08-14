import { ActorStyledCardContainer, ActorStyledCardCover, ActorStyledCardText, ActorStyledCardTextCenterFields, ActorStyledCardTextFields, ActorStyledCardTextSecondary } from "../../styled/ActorCard.styled"

type rootProps = {children?: any, imageUrl?:string}
const Root = ({children, imageUrl}: rootProps) => { 
    return (
    <ActorStyledCardContainer $imageBg={imageUrl||""}>
        {children}
        <ActorStyledCardCover/>
    </ActorStyledCardContainer>
)}
type textFieldProps = {children?: any}
const TextField = ({children} : textFieldProps) => {
    return (
        <ActorStyledCardTextCenterFields>
            <ActorStyledCardTextFields>
                {children}
            </ActorStyledCardTextFields>
        </ActorStyledCardTextCenterFields>
    )
}
const ActorCard = {
    Root,
    TextField,
    PrimaryText: ActorStyledCardText,
    SecondaryText: ActorStyledCardTextSecondary
}

export default ActorCard