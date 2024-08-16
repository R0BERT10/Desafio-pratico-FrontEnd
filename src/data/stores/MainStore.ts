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
    modalOpen: enumModalsShow.NONE,
    formError: [],

    setUser: (user) => { set(() => ({ user:user })) },
    setModalOpen: (modal) => { set(() => ({ modalOpen:modal }))},
    setFormError: (formError) => { set(() => ({ formError:formError }))}
}))


export default mainStore



export type tempModelState = {
    userName:string,
    name:string,
    setUserName: (user:string) => void
    setName: (nome:string) => void
}

export const tempStore = create<tempModelState>((set) => ({
    userName:"string",
    name:"string",

    setName: (user) => { set(() => ({ name:user })) },
    setUserName: (nome) => { set(() => ({ userName:nome }))},
}))