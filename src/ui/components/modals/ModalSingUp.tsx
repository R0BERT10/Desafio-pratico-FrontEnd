import { enumFormErrorType, enumFormFieldError } from "../../../data/@types/enumFormFieldError"
import { enumModalsShow } from "../../../data/@types/enumModalState"
import { cleanField } from "../../../data/hooks/cleanFieldSubmit"
import { onSingUpFormSubmit } from "../../../data/hooks/onSingUpFromSubmit"
import mainStore from "../../../data/stores/MainStore"
import { ModalStyledBody, ModalStyledCenterBox, ModalStyledContainer, ModalStyledFooterBox, ModalStyledFooterTextCenter, ModalStyledForm, ModalStyledSubTitle, ModalStyledTextAnchor, ModalStyledTitle, ModalStyledTitleField } from "../../styled/Modal.styed"
import { InfoErrorText } from "../../styled/TextError.styked"
import { ButtonStyledLarge } from "../inputs/ButtonSyledLarge"
import InputStyled from "../inputs/InputStyled"


export default function ModalSingUp() {
    const formError = mainStore(states=>states.formError)
    const states = {
        setUser: mainStore(state=>state.setUser),
        setFormError: mainStore(state=>state.setFormError),
        setModalOpen: mainStore(state=>state.setModalOpen)
    }

    const errorName = formError.find(fieldError=>fieldError.field==enumFormFieldError.ERROR_FULL_NAME)
    const errorEmail = formError.find(fieldError=>fieldError.field==enumFormFieldError.ERROR_EMAIL)
    const errorPass = formError.find(fieldError=>fieldError.field==enumFormFieldError.ERROR_PASS)
    const errorRePass = formError.find(fieldError=>fieldError.field==enumFormFieldError.ERROR_REP_PASS)
    const errorText = {
        name : errorName == undefined ? undefined : errorName.type == enumFormErrorType.MANDATORY ? "Campo obrigatório" : "Nome digitado incorretamente.",
        email : errorEmail == undefined ? undefined : errorEmail.type == enumFormErrorType.MANDATORY ? "Campo obrigatório" : "E-mail inválido.",
        pass : errorPass == undefined ? undefined : errorEmail?.type == enumFormErrorType.MANDATORY ? "Campo obrigatório" : "Mínimo 8 caracteres.",
        repass : errorRePass == undefined ? undefined : errorRePass.type == enumFormErrorType.MANDATORY ? "Campo obrigatório" : "Senhas diferentes."
    }
    const OnErrorAuth = () => {
        const authError = formError.find(fieldError=>fieldError.field==enumFormFieldError.ERROR_AUTH)
        if (authError){
            return (
                <InfoErrorText>{authError.message}</InfoErrorText>  
            )
        }
        return null
    }
    return (
        <ModalStyledBody>
            <ModalStyledContainer>
                <ModalStyledCenterBox>
                    <ModalStyledForm onSubmit={e => onSingUpFormSubmit(e, states)}>
                        <ModalStyledTitleField>
                            <ModalStyledTitle>Crie sua conta</ModalStyledTitle>
                            <ModalStyledSubTitle>Insira seus dados para completar o cadastro.</ModalStyledSubTitle>
                        </ModalStyledTitleField>
                        <OnErrorAuth/>
                        <InputStyled title="Nome completo" name="name" placeholder="Digite seu nome"  isMandatory={true} textError={errorText.name}/>
                        <InputStyled title="E-mail" name="email" placeholder="Digite seu e-mail" isMandatory={true} textError={errorText.email}/>
                        <InputStyled title="Senha" name="pass" placeholder="Digite sua senha" isMandatory={true} type="password" textError={errorText.pass}/>
                        <InputStyled title="Confirmar senha" name="rPass" placeholder="Confirme sua senha" isMandatory={true} type="password" textError={errorText.repass}/>
                        <ButtonStyledLarge type="submit">Cadrastar</ButtonStyledLarge>
                    </ModalStyledForm>
                </ModalStyledCenterBox>
                <ModalStyledFooterBox>
                    <ModalStyledFooterTextCenter>Já tem uma conta?</ModalStyledFooterTextCenter>
                    <ModalStyledTextAnchor onClick={()=>{
                        states.setModalOpen(enumModalsShow.SING_IN)
                        cleanField(states)
                        }}>
                        Fazer login
                    </ModalStyledTextAnchor>
                </ModalStyledFooterBox>
            </ModalStyledContainer>
        </ModalStyledBody>
    )
}