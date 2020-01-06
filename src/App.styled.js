import styled from 'styled-components';

export const Underline = styled.span`
  border-bottom: 2px solid #E05A5B;
`;

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
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
`;

export const Word = styled.span`
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 5rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
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
`;

export default styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

