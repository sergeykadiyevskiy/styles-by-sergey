import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
height: 30px;
background-color: #386183;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
font-size: 14px;
${mobile({fontSize: "12px"})}
`

export const Banner = () => {

  
  return (
    <Container>Free Shipping + Returns, Free Membership, Exclusive Products</Container>
  )
}

export default Banner