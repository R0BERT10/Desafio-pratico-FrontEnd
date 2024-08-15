import { InputHTMLAttributes } from "react"
import { InputStyledElementContainer, InputStyledElementInput, InputStyledElementMandatory, InputStyledElementTextError, InputStyledElementTitle, InputStyledElementTitleField } from "../../styled/Input.styed"

type propsInput = {
    title : string,
    placeHolder : string,
    mandatory : boolean,
    textError? : string,
    inputProps? : InputHTMLAttributes<HTMLInputElement>
}

export default function InputStyled(props:propsInput){
    const mandatory = props.mandatory ? (<InputStyledElementMandatory>*</InputStyledElementMandatory>) : null
    const inputProps = props.inputProps
    const textError = props.textError == undefined ? null : (<InputStyledElementTextError>{props.textError}</InputStyledElementTextError>)
    return (
        <InputStyledElementContainer>
            <InputStyledElementTitleField>
                <InputStyledElementTitle>
                {props.title}
                </InputStyledElementTitle>
               {mandatory}
            </InputStyledElementTitleField>
            <InputStyledElementInput placeholder={props.placeHolder} {...inputProps}></InputStyledElementInput>
            {textError}
        </InputStyledElementContainer>
    )
}