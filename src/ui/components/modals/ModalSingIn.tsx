import { enumFormErrorType, enumFormFieldError } from "../../../data/@types/enumFormFieldError"
import { enumModalsShow } from "../../../data/@types/enumModalState"
import { cleanField } from "../../../data/hooks/cleanFieldSubmit"
import { onSingInFormSubmit } from "../../../data/hooks/onSingInFromSubmit"
import mainStore from "../../../data/stores/MainStore"
import { ModalStyledBody, ModalStyledCenterBox, ModalStyledContainer, ModalStyledFooterBox, ModalStyledFooterTextCenter, ModalStyledForm, ModalStyledSubTitle, ModalStyledTextAnchor, ModalStyledTitle, ModalStyledTitleField } from "../../styled/Modal.styked"
import { ButtonStyledLarge } from "../inputs/ButtonSyledLarge"
import InputStyled from "../inputs/InputStyled"


export default function ModalSingIn() {
    const formError = mainStore(state=>state.formError)
    const states = {
        setUser: mainStore(state=>state.setUser),
        setFormError: mainStore(state=>state.setFormError),
        setModalOpen: mainStore(state=>state.setModalOpen)
    }

    const errorEmail = formError.find(fieldError=>fieldError.field==enumFormFieldError.ERROR_EMAIL)
    const errorPass = formError.find(fieldError=>fieldError.field==enumFormFieldError.ERROR_PASS)
    const errorText = {
        email : errorEmail == undefined ? undefined : errorEmail.type == enumFormErrorType.MANDATORY ? "Campo obrigatório" : "E-mail não cadastrado.",
        pass : errorPass == undefined ? undefined : errorEmail?.type == enumFormErrorType.MANDATORY ? "Campo obrigatório" : "Senha incorreta"
    }

    return (
        <ModalStyledBody>
            <ModalStyledContainer>
                <ModalStyledCenterBox>
                    <ModalStyledForm onSubmit={(e) => onSingInFormSubmit(e, states)}>
                        <ModalStyledTitleField>
                            <ModalStyledTitle>Acesse sua conta</ModalStyledTitle>
                            <ModalStyledSubTitle>Bem vindo de volta! Entre com seus dados.</ModalStyledSubTitle>
                        </ModalStyledTitleField>
                            <InputStyled title="E-mail" name="email" placeholder="Digite seu e-mail" isMandatory={true} textError={errorText.email}/>
                            <InputStyled title="Senha" name="pass" placeholder="Digite sua senha" isMandatory={true} textError={errorText.pass}/>
                            <ButtonStyledLarge type="submit">Fazer login</ButtonStyledLarge>
                    </ModalStyledForm>
                    <ModalStyledFooterBox>
                        <ModalStyledFooterTextCenter>Não tem uma conta ainda?</ModalStyledFooterTextCenter>
                        <ModalStyledTextAnchor onClick={()=>{
                            states.setModalOpen(enumModalsShow.SING_UP)
                            cleanField(states)
                            }}>Criar conta</ModalStyledTextAnchor>
                    </ModalStyledFooterBox>
                </ModalStyledCenterBox>
            </ModalStyledContainer>
        </ModalStyledBody>
    )
}