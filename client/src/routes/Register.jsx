import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://i.imgur.com/PWerptJ.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 25%;
  border: none;
  padding: 15px 20px;
  background-color: #386183;
  color: white;
  cursor: pointer;
  margin: 15px 55px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Email Address" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Agreement>
            By creating an account, you agree to Styles By Sergey{" "}
            <b>Privacy Policy</b> and <b>Terms of Use</b>.
          </Agreement>
          <Button>JOIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
