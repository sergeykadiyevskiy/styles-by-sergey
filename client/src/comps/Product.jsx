import styled  from "styled-components"
import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    display: flex;
    justify-content: center;
    min-width: 280px;
    height: 350px;
    align-items: center;
    background-image: linear-gradient(to bottom right, #d1fff4, #ffcab8);
    position: relative;
    
    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    border-radius: 50%;
    height: 200px;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    z-index: 2;
    height: 75%;
`
const Icon = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    border-radius: 50%;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color: #ff85a2;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
<Circle />
<Image src={item.image} />
<Info>
    <Icon>
    <ShoppingCartOutlinedIcon />
    </Icon>
    <Icon>
    <Link to={`/product/${item._id}`}>
    <SearchOutlinedIcon />
    </Link>
    </Icon>
    <Icon>
    <FavoriteBorderOutlinedIcon />
    </Icon>
</Info>
    </Container>
  )
}

export default Product