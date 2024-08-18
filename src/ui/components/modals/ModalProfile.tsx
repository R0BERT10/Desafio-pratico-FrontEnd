import InputStyled from "../inputs/InputStyled"
import { ModalProfileButtonsRowField, ModalProfileCloseButton, ModalProfileContainer, ModalProfileEssentialDataContainer, ModalProfileNoEssentialDataContainer, ModalProfileNoEssentialFields, ModalProfileRectangularButton, ModalProfileRectangularNegativeButton, ModalProfileSubTDescription, ModalProfileSubTitle, ModalProfileTextDescription, ModalProfileTitle, ModalProfileTitleField, ModalStyledBody } from "../../styled/Modal.styed"
import mainStore from "../../../data/stores/MainStore"
import { onDeleteSubmit } from "../../../data/hooks/deleteAccount"

export default function ModalProfile () {
    const states = {
        user: mainStore(state=>state.user),
        setUser: mainStore(state=>state.setUser),
        setFormError: mainStore(state=>state.setFormError),
        setModalOpen: mainStore(state=>state.setModalOpen),
    }

    return (
        <ModalStyledBody>
        <ModalProfileContainer>
            <ModalProfileTitleField>
                <ModalProfileTitle>Preferências da conta</ModalProfileTitle>
                <ModalProfileCloseButton />
            </ModalProfileTitleField>
                <ModalProfileNoEssentialDataContainer>
                    <ModalProfileSubTDescription>
                        <ModalProfileSubTitle>Usuário</ModalProfileSubTitle>
                        <ModalProfileTextDescription>Faça a edição do seu nome de usuário e de seu nome.</ModalProfileTextDescription>
                    </ModalProfileSubTDescription>
                    <ModalProfileNoEssentialFields>
                        <InputStyled title={"Nome de usuário"} name="user" isMandatory={true} defaultValue={states.user.user} />
                        <InputStyled title={"Nome completo"} name="name" isMandatory={true} defaultValue={states.user.name} />
                    </ModalProfileNoEssentialFields>
                </ModalProfileNoEssentialDataContainer>
                <ModalProfileEssentialDataContainer>
                    <ModalProfileSubTDescription>
                        <ModalProfileSubTitle>E-mail</ModalProfileSubTitle>
                        <ModalProfileTextDescription>O e-mail não pode ser editado, apenas visualizado.</ModalProfileTextDescription>
                    </ModalProfileSubTDescription>
                    <InputStyled title={"E-mail"} name="email" isMandatory={true} disabled={true} value={states.user.email} />
                </ModalProfileEssentialDataContainer>
                <ModalProfileNoEssentialDataContainer>
                    <ModalProfileSubTDescription>
                        <ModalProfileSubTitle>Encerramento da conta</ModalProfileSubTitle>
                        <ModalProfileTextDescription>Ao deletar sua conta, todos os seus dados serão permanentemente excluídos. Esta ação é irreversível.</ModalProfileTextDescription>
                    </ModalProfileSubTDescription>
                    <ModalProfileButtonsRowField>
                        <ModalProfileRectangularNegativeButton onClick={() => onDeleteSubmit(states)}>Deletar conta</ModalProfileRectangularNegativeButton>
                        <ModalProfileRectangularButton type="submit">Salvar alterações</ModalProfileRectangularButton>
                    </ModalProfileButtonsRowField>
                </ModalProfileNoEssentialDataContainer>
        </ModalProfileContainer>
        </ModalStyledBody>
    )
}