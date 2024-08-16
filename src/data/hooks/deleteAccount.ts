import { handleSubmitStates } from "../@types/@handlesSubmit"
import { enumModalsShow } from "../@types/enumModalState"
import User from "../entities/User"
import DeleteProfile from "../services/DeleteUser"

export function onDeleteSubmit(handles:handleSubmitStates ) {
    const { user, setUser, setModalOpen } = handles
    const idToken = user?.idToken
    if (idToken == undefined) { throw Error("E necessario o usuario logado.") }

    new DeleteProfile().execute({ idToken }).then(result => {
            if (result.isSuccess) {
                setUser(new User())
                setModalOpen(enumModalsShow.SING_UP)
                console.log(result.getValue())
            } else {
                console.log(result.getError())
            }
        }
    )
}