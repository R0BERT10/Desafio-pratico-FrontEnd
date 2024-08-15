import { ButtonStyledLargeBody, ButtonStyledText } from "../../styled/Button.styled"

interface propsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: any
}

export const ButtonStyledLarge = (props:propsButton) => {
    return (
        <ButtonStyledLargeBody {...props}>
            <ButtonStyledText>{props.children}</ButtonStyledText>
        </ButtonStyledLargeBody>
    )
}