import styled from 'styled-components';

export const Underline = styled.span`
  border-bottom: 2px solid #E05A5B;
`;

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  @media all and (max-width: 736px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  margin: 0;
`;

export const LastAuthor = styled.div`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
`;

export const Words = styled.div`
  margin: 100px 0;
  margin-right: -20px;

  @media all and (max-width: 736px) {
    margin: 20px 0;
    padding: 0 15px;
  }
`;

export const Tooltip = styled.div`
  background-color: #ffffff;
  border: 2px solid #000000;
  display: none;
  left: 50%;
  margin-left: -100px;
  padding: 10px;
  position: absolute;
  width: 200px;
  top: -70px;
  z-index: 2;

  @media all and (max-width: 736px) {
    display: none;
  }
`;

export const WordWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-right: ${({ noSpace }) => noSpace ? '0' : '20px'};

  &:hover {
    div {
      display: block;
    }
  }

  @media all and (max-width: 736px) {
    margin-right: 10px;
  }
`;

export const Word = styled.span`
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 5rem;

  @media all and (max-width: 736px) {
    font-size: 2.5rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;

  @media all and (max-width: 736px) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  @media all and (max-width: 736px) {
    justify-content: center;
    padding: 0 20px;
  }
`;

export const Group = styled.div`
  flex: ${({ flex }) => flex ? flex : 1};
  padding: 15px;
  position: relative;
  width: 100%;

  small {
    display: inline-block;
    margin-top: 10px;
  }

`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid #000000;
  color: #000000;
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  outline: 0;
  padding: 7px 0;
  transition: border-color 0.2s;
  width: 100%;

	&::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    cursor: text;
    font-size: 1rem;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #E05A5B;
    font-weight: 700;
    border-width: 3px;

    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.8rem;
      color: #E05A5B;
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
    }
  }
`;

export const Label = styled.label`
  color: #9b9b9b;
  display: block;
  font-size: 0.8rem;
  position: absolute;
  top: 0;
  transition: 0.2s;
`;

export const Description = styled.div`
  margin: 100px 0;

  @media all and (max-width: 736px) {
    margin: 50px 0;
    text-align: center;
    padding: 15px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: 2px solid #000000;
  display: inline-block;
  padding: 0.7em 1.4em;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family:'Raleway',sans-serif;
  font-weight: 400;
  color: #000000;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  position: relative;

   &:hover {
    border: 2px solid #E05A5B;
    background-color: #E05A5B;
    color: #FFFFFF;
   }

  @media all and (max-width: 736px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export default styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

