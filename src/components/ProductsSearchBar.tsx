import React from "react";
import "./ProductsSearchBar.scss";
 import { RiSearch2Line } from "react-icons/ri";
import Logo from "./Logo";
import { ProductType } from "../FakerData/FakerData";

interface ProductsInterface {
  products: ProductType[];
}
const ProductSearchBar = ({ products }: ProductsInterface) => {
  return (
    <div className="products_navbar">
      <div></div>
      <form className="input_container">
        <input type="text" className="home_input" placeholder="Search..." />
        <button className="search_icon_container">
          <RiSearch2Line size="24" />
        </button>
      </form>
      <Logo/>
     </div>
  );
};

export default ProductSearchBar;
