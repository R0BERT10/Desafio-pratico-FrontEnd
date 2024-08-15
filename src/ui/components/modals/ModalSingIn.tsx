import styled from "styled-components"
import { onSingInFormSubmit } from "../../../data/hooks/onSingInFromSubmit"
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

const ModalStyledContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgb(0, 0, 0, 0.7);
z-index: 100000;
`
export default function ModalSingIn( {} : modalProps) {
    console.log("renneder")
    const states = {
        setUser: mainStore(state=>state.setUser),
        setFormError: mainStore(state=>state.setFormError),
        setModalOpen: mainStore(state=>state.setModalOpen)
    }

    return (
        <ModalStyledContainer>
            <form onSubmit={(e) => onSingInFormSubmit(e, states)}>
                <Input name="email" placeholder="Email" isMandatory={false}/>
                <Input name="pass" placeholder="Password"/>
                <button type="submit">Cadrastar</button>
            </form>
        </ModalStyledContainer>
    )
}