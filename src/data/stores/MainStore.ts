import { create } from "zustand";
import User from "../entities/User";
import { enumModalsShow } from "../@types/enumModalState";
import FormFieldError from "../@types/enumFormFieldError";

export type mainState = {
    user:User,
    modalOpen:enumModalsShow,
    formError:FormFieldError[]

    setUser: (user:User) => void
    setModalOpen: (modal:enumModalsShow) => void
    setFormError: (formError:FormFieldError[]) => void
}

const mainStore = create<mainState>((set) => ({
    user: new User(),
    modalOpen: enumModalsShow.SING_UP,
    formError: [],

    setUser: (user) => { set(() => ({ user:user })) },
    setModalOpen: (modal) => { set(() => ({ modalOpen:modal }))},
    setFormError: (formError) => { set(() => ({ formError:formError }))}
}))


export default mainStore