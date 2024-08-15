import { InputStyledElementContainer, InputStyledElementInput, InputStyledElementMandatory, InputStyledElementTextError, InputStyledElementTitle, InputStyledElementTitleField } from "../../styled/Input.styed"

interface propsInput extends React.InputHTMLAttributes<HTMLInputElement> {
    title : string,
    isMandatory : boolean,
    textError? : string,
}

export default function InputStyled(props:propsInput){
    const mandatory = props.isMandatory ? (<InputStyledElementMandatory>*</InputStyledElementMandatory>) : null
    const textError = props.textError == undefined ? null : (<InputStyledElementTextError>{props.textError}</InputStyledElementTextError>)
    return (
        <InputStyledElementContainer>
            <InputStyledElementTitleField>
                <InputStyledElementTitle>
                {props.title}
                </InputStyledElementTitle>
               {mandatory}
            </InputStyledElementTitleField>
            <InputStyledElementInput data-mandatory={props.isMandatory||false} {...props}></InputStyledElementInput>
            {textError}
        </InputStyledElementContainer>
    )
}