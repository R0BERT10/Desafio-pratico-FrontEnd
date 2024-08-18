import { enumErrorRequest } from "../data/@types/enumErrorRequestMessage"
import FormFieldError, { enumFormErrorType, enumFormFieldError } from "../data/@types/enumFormFieldError"

export function checkMandatoryRequestAndAddToErrorList(element: any, listErrorField: FormFieldError[], inputField: enumFormFieldError) {
    const isMandatory = element.dataset.mandatory == "true"
    if (isMandatory && element.value == "") {
        listErrorField.push(
            new FormFieldError(inputField, enumFormErrorType.MANDATORY)
        )
    }
}

export function checkMessageErrorResponse(messageResponse: string, fieldError: FormFieldError[]) {
    switch (messageResponse) {
        case enumErrorRequest.INVALID_EMAIL:
            fieldError.push(new FormFieldError(
                enumFormFieldError.ERROR_EMAIL, enumFormErrorType.INCORRECT
            ))
            return true
        case enumErrorRequest.INVALID_LOGIN_CREDENTIALS:
            fieldError.push(new FormFieldError(
                enumFormFieldError.ERROR_PASS, enumFormErrorType.INCORRECT
            ))
            return true
        case enumErrorRequest.EMAIL_ALREADY_REGISTERED:
            fieldError.push(new FormFieldError(
                enumFormFieldError.ERROR_AUTH, enumFormErrorType.INCORRECT,
                "Já existe um usuario com esse email."
            ))
            return true
        default:
            return false
    }
}

export function validateEmail(email:string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}  