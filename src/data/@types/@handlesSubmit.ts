import User from "../entities/User"
import FormFieldError from "./enumFormFieldError"
import { enumModalsShow } from "./enumModalState"

export type handleSubmitStates = {
    setUser: (user:User) => void
    setModalOpen: (modal:enumModalsShow) => void
    setFormError: (formError:FormFieldError[]) => void
}

