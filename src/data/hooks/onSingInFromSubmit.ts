import React from "react";
import FormFieldError, { enumFormFieldError } from "../@types/enumFormFieldError";
import SingInAccount from "../services/SingInService";
import { enumModalsShow } from "../@types/enumModalState";
import { checkMandatoryRequestAndAddToErrorList, checkMessageErrorResponse } from "../../util/helpForms";
import { handleSubmitStates } from "../@types/@handlesSubmit";

export function onSingInFormSubmit(event: React.FormEvent, handles:handleSubmitStates ) {
    event.preventDefault()
    const { setUser, setFormError, setModalOpen } = handles
    const target = event.target as any
    const fieldError: FormFieldError[] = []

    const emailElement = target.email
    checkMandatoryRequestAndAddToErrorList(emailElement, fieldError, enumFormFieldError.ERROR_EMAIL)
    const passElement = target.pass
    checkMandatoryRequestAndAddToErrorList(passElement, fieldError, enumFormFieldError.ERROR_PASS)

    if (fieldError.length == 0) {
        new SingInAccount().execute({
            email: emailElement.value,
            password: passElement.value
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