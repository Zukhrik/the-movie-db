import styled from 'styled-components'

export const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0a0b;
  background-image: linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%);
`

export const SignInFormWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 16px;
  width: 300px;
  background: #fff;
  position: relative;

  .mb {
    margin-bottom: 0;
  }
  
  input {
    margin-top: 6px;
  }
  
  label {
    font-size: 16px;
    font-weight: 500;
  }

  .button {
    width: 100%;
  }

  .sign-up-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h5 {
      color: #868686;
    }
  }
`

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  border: 0.5px solid #868686;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868686;

  svg {
    width: 12px;
    height: 12px;
  }
`