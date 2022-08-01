import { Link } from "react-router-dom"
import styled  from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 3px;
    position: relative;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const Info = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #b8edff;
    font-size: 70px;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 1rem crimson);
    
`
const Button = styled.button`
    border: none;
    color: black;
    padding: 10px;
    background-color: #b8edff;
    font-weight: 700;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.category}`}>
    <Image src={item.img}/>
    <Info>
        <Title>{item.title}</Title>
        <Button>EXPLORE</Button>
    </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem