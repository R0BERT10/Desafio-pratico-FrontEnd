import { onSingUpFormSubmit } from "../../../data/hooks/onSingUpFromSubmit"
import mainStore from "../../../data/stores/MainStore"

type modalProps = {
    
}

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isMandatory?:boolean
}
function Input(props:inputProps) {
    return (
        <input data-mandatory={props.isMandatory||false} {...props}/>
    )
}


export default function ModalSingUp( {} : modalProps) {
    console.log("ffffffff")
    const states = {
        setUser: mainStore(state=>state.setUser),
        setFormError: mainStore(state=>state.setFormError),
        setModalOpen: mainStore(state=>state.setModalOpen)
    }
    return (
        <>
            <form onSubmit={e => onSingUpFormSubmit(e, states)}>
                <Input name="name" placeholder="nome" isMandatory={true}/>
                <Input name="email" placeholder="Email" isMandatory={true}/>
                <Input name="pass" placeholder="Password" isMandatory={true}/>
                <Input name="rPass" placeholder="Repetir Senha" isMandatory={true}/>
                <button type="submit">Cadrastar</button>
            </form>
        </>
    )
}