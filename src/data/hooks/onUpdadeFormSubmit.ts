import { checkMandatoryRequestAndAddToErrorList, checkMessageErrorResponse } from "../../util/helpForms"
import { handleSubmitStates } from "../@types/@handlesSubmit"
import FormFieldError, { enumFormFieldError } from "../@types/enumFormFieldError"
import { enumModalsShow } from "../@types/enumModalState"
import UpdateAccount from "../services/UpdateUser"


export function onUpdateFormSubmit(event: React.FormEvent, handles:handleSubmitStates ) {
    event.preventDefault()
    const { user, setUser, setFormError, setModalOpen } = handles
    const target = event.target as any
    const fieldError: FormFieldError[] = []

    const nameElement = target.name
    checkMandatoryRequestAndAddToErrorList(nameElement, fieldError, enumFormFieldError.ERROR_FULL_NAME)
    const userElement = target.user
    checkMandatoryRequestAndAddToErrorList(userElement, fieldError, enumFormFieldError.ERROR_USER_NAME)
    
    if (fieldError.length == 0) {
        new UpdateAccount().execute({
            user: userElement.value,
            name: nameElement.value
        }).then(result => {
            if (result.isSuccess) {
                const updateUser = result.getValue()
                updateUser.idToken = user?.idToken
                updateUser.refreshToken = user?.refreshToken
                setUser(updateUser)
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