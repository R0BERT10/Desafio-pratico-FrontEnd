import styled from 'styled-components';
import './index.css';
import InputStyled from '../../components/inputs/InputStyled';

const ModalContainer = styled.div`
display: flex;
width: 477px;
padding: 48px 48px 48px 48px;
flex-direction: column;
gap: 64px;
align-items: center;
flex-wrap: nowrap;
background-color: #121212;
border-radius: 24px;
border: 4px solid #232323;
position: relative;
overflow: hidden;
z-index: 1;
margin: 114px 0 0 481px
`
const ModalCenterBox = styled.div`
display: flex;
flex-flow: column;

gap: 24px;align-items: 
flex-start;
//align-self: stretch;
flex-shrink: 0;
position: relative;
z-index: 2;
`

const ModalTitleField = styled.div`
display: flex;
width: 381px;
flex-flow: column;
gap: 4px;
align-items: center;
flex-shrink: 0;
position: relative;
z-index: 3;
`
const ModalTitle = styled.span`
min-width: 0px;
height: 39px;
align-self: stretch;
flex-shrink: 0;
flex-basis: auto;
font-family: Hero New, var(--default-font-family);
font-size: 32px;
font-weight: 600;
line-height: 38.4px;
color: rgb(238, 238, 238);
position: relative;
text-align: center;
white-space: nowrap;
z-index: 4;
`
const ModalSubTitle = styled.span`
height: 20px;
flex-shrink: 0;
flex-basis: auto;
font-family: Hero New, var(--default-font-family);
font-size: 14px;
font-weight: 400;
line-height: 19.6px;
color: rgb(180, 180, 180);
position: relative;
text-align: left;
white-space: nowrap;
z-index: 5;
`


export default function ModalSingUpp() {
  return (
    <>
      <ModalContainer>
        <ModalCenterBox>
        <ModalTitleField>
        <ModalTitle>Crie sua conta</ModalTitle>
        <ModalSubTitle>Insira seus dados para completar o cadastro.</ModalSubTitle>
        </ModalTitleField>
        <InputStyled placeHolder='Digite seu nome' mandatory={false} title={'Nome completo'}></InputStyled>
        <InputStyled placeHolder='Digite seu nome' mandatory={false} title={'Nome completo'}></InputStyled>
        <InputStyled placeHolder='Digite seu nome' mandatory={false} title={'Nome completo'}></InputStyled>
        <InputStyled placeHolder='Digite seu nome' mandatory={false} title={'Nome completo'}></InputStyled>
        </ModalCenterBox>
      </ModalContainer>
    </>
  );
}
