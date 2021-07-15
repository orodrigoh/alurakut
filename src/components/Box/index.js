import styled from 'styled-components';

const Box = styled.div`
  background: ${props => `${props.theme.colors.backgroundTertiary}`};
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: ${props => `${props.theme.colors.colorPrimary}`};
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${props => `${props.theme.colors.textSecondaryColor}`};
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${props => `${props.theme.colors.textSecondaryColor}`};
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: ${props => `${props.theme.colors.backgroundPrimary}`};
    color: ${props => `${props.theme.colors.textPrimaryColor}`};
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color:${props => `${props.theme.colors.textPrimaryColor}`};
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: ${props => `${props.theme.colors.buttonText}`};
    border-radius: 10000px;
    background-color: ${props => `${props.theme.colors.button}`};
  }
`; 

export default Box 