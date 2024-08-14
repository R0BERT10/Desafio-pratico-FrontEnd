import { TopActionBarStyledContainer, TopActionBarStyledDescriptionField, TopActionBarStyledNavigateButtonRight, TopActionBarStyledNavigateButtons, TopActionBarStyledPipe, TopActionBarStyledText, TopActionBarStyledTextEspecial, TopActionBarStyledTitle, TopActionBarStyledTitleLarge, TopActionBarStyledTopNavigateButtonLeft } from "../../styled/TopActionBarSection.styled"

type rootProps = {children?: any, zIndex?:number}
const Root = ({children, zIndex}: rootProps) => {
    return(<TopActionBarStyledContainer $zIndex={zIndex||0}>
        <TopActionBarStyledPipe/>
        {children}
    </TopActionBarStyledContainer>)
}
const TopActionBarNavigateSection = {
    Root,
    TitleLarge: TopActionBarStyledTitleLarge,
    Title: TopActionBarStyledTitle,
    Description: TopActionBarStyledDescriptionField,
    Text: TopActionBarStyledText,
    SpecialText: TopActionBarStyledTextEspecial,
    FieldButton: TopActionBarStyledNavigateButtons,
    ButtonLeft: TopActionBarStyledTopNavigateButtonLeft,
    ButtonRight: TopActionBarStyledNavigateButtonRight
}


export default TopActionBarNavigateSection