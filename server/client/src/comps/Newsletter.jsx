import styled  from "styled-components"
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { mobile } from "../responsive";


const Container = styled.div`
    height: 60vh;
    background-image: linear-gradient(to bottom right, #ffcab8, #d1fff4);;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: "65px"})}
`
const Description = styled.div`
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 24px;
    ${mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
    display: flex;
    height: 40px;
    justify-content: space-between;
    width: 40%;
    background-color: white;
    border: 1px solid lightgray;
    ${mobile({width: "70%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1.5;
    border: none;
    background-color: crimson;
    color: white;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>SUBSCRIBE</Title>
        <Description>Receive updates on exclusive product releases, discounts, and much more.</Description>
        <InputContainer>
            <Input  placeholder="Enter Your Email"/>
            <Button>
            <SendRoundedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter