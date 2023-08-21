import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.h2`
  align-self: center;
  margin-right: 45%;
  text-transform: uppercase;
`;

export const GoBackLinkWrapper = styled.div`
  margin-bottom: 36px;
  width: 100%;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  max-width: 70%;
  gap: 32px;
  padding: 48px 56px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 24px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff,
    10px 12px 12px 0px #cab1b14d;
`;

export const Form = styled.form`
  padding: 28px 36px;
  border-radius: 32px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 40%;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const InputsWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;
  gap: 8px;
  align-self: flex-end;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  /* box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff; */
`;

export const AuthNotify = styled.p`
  z-index: 1000;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(100%, 75%);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  min-width: 110px;
  min-height: 44px;
  text-align: center;
  font-size: 14px;
  line-height: 1.33;
  color: black;
  border: 1px solid yellow;
  border-radius: 10px;
  box-shadow: 0 0 10em 1em rgba(255, 139, 72, 0.6);
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const BtnWrapper = styled.div`
  position: relative;
  &:hover > p,
  &:focus > p {
    opacity: 1;
  }
`;

export const FormBtn = styled.button`
  & > svg {
    width: 36px;
    height: 36px;
  }
`;

export const Input = styled.input`
  padding: 6px 12px;
  margin-left: 20px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;
  color: black;
  outline-color: yellow;
  background-color: transparent;
  &:hover {
    border-bottom: 1px solid yellow;
  }
  &:focus + .lightbox-modal__auth-label {
    color: yellow;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 24px;
  color: black;
  &:hover,
  &:focus {
    color: yellow;
    font-weight: bold;
  }
`;