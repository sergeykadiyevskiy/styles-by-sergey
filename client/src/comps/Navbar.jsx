import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "45px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;
  ${mobile({ fontSize: "15px" })}
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "space-around", marginRight: "5px" })}
`;

const Menuitem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    border: `2px solid `,
    top: 0,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: "18px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Styles by Sergey</Logo>
        </Center>
        <Right>
          <Menuitem>REGISTER</Menuitem>
          <Menuitem>SIGN IN</Menuitem>
          <Link to="/cart">
            <Menuitem>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={quantity} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </StyledBadge>
              </IconButton>
            </Menuitem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
