import React, { useContext, useEffect } from "react";
import CustomCard from "../../components/CustomCard";
import "./home.css";
import { productsContext } from "../../context/productContext";
import FilterM from "../../components/FilterM";
import FooterM from "../../components/FooterM/FooterM";
import CardList from "../../components/CardList/CardList";

const HomePage = () => {
  const { products, getProducts, getCategories, categories } =
    useContext(productsContext);
  // console.clear();
  // console.log(products);
  useEffect(() => {
    // console.log(1);
    getProducts();
  }, []);
  return (
    <>
      <FilterM />
      <div className="cardDiv">
        {products.map((item) => (
          <CustomCard {...item} />
        ))}
      </div>
      <FooterM />
    </>
  );
};

export default HomePage;
