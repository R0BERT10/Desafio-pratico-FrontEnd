import React from "react";
import FormFieldError, { enumFormErrorType, enumFormFieldError } from "../@types/enumFormFieldError";
import { handleSubmitStates } from "../@types/@handlesSubmit";
import SingUpAccount from "../services/SingUpService";
import { enumModalsShow } from "../@types/enumModalState";
import { checkMandatoryRequestAndAddToErrorList, checkMessageErrorResponse } from "../../util/helpForms";

export function onSingUpFormSubmit(event: React.FormEvent, handles:handleSubmitStates ) {
    event.preventDefault()
    const { setUser, setFormError, setModalOpen } = handles
    const target = event.target as any
    const fieldError: FormFieldError[] = []

    const nameElement = target.name
    checkMandatoryRequestAndAddToErrorList(nameElement, fieldError, enumFormFieldError.ERROR_FULL_NAME)
    const emailElement = target.email
    checkMandatoryRequestAndAddToErrorList(emailElement, fieldError, enumFormFieldError.ERROR_EMAIL)
    const passElement = target.pass
    checkMandatoryRequestAndAddToErrorList(passElement, fieldError, enumFormFieldError.ERROR_PASS)
    const replyPassElement = target.rPass
    checkMandatoryRequestAndAddToErrorList(replyPassElement, fieldError, enumFormFieldError.ERROR_REP_PASS)

    if (passElement.value != replyPassElement.value){
        fieldError.push(new FormFieldError(
            enumFormFieldError.ERROR_REP_PASS, enumFormErrorType.INCORRECT
        ))
    }
    if (fieldError.length == 0) {
        const user = emailElement.value.split("@")[0]
        new SingUpAccount().execute({
            email: emailElement.value,
            password: passElement.value,
            user,
            name: nameElement.value
        }).then(result => {
            if (result.isSuccess) {
                setUser(result.getValue())
                setFormError([])
                setModalOpen(enumModalsShow.PROFILE)
                console.log(result.getValue())
            } else {
                const messageResponse = result.getError().messageResponse
                if (!checkMessageErrorResponse(messageResponse, fieldError)) {
                    console.log(result.getError())
                }
                setFormError(fieldError)
                console.log(fieldError)
            }
        })
    } else {
        setFormError(fieldError)
    }
}
