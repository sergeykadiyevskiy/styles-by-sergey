import styled from "styled-components";
import Navbar from "../comps/Navbar";
import { Banner } from "../comps/Banner";
import Products from "../comps/Products";
import Newsletter from "../comps/Newsletter";
import Footer from "../comps/Footer";
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom";
import { useState } from "react";



const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("featured")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  }


  return (
    <Container>
      <Navbar />
      <Banner />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>Beige</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Gold</Option>
            <Option>Green</Option>
            <Option>Grey</Option>
            <Option>Lime</Option>
            <Option>Orange</Option>
            <Option>Purple</Option>
            <Option>Stealth</Option>
            <Option>Tan</Option>
            <Option>White</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>M 5.5 / W 7</Option>
            <Option>M 6 / W 7.5</Option>
            <Option>M 6.5 / W 8</Option>
            <Option>M 7 / W 8.5</Option>
            <Option>M 7.5 / W 9</Option>
            <Option>M 8 / W 9.5</Option>
            <Option>M 8.5 / W 10</Option>
            <Option>M 9 / W 10.5</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="featured">featured</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
