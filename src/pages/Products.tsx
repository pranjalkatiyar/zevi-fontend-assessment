import React, { useState, useEffect } from "react";
import "./Products.scss";
import ProductSearchBar from "../components/ProductsSearchBar";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import ProductsResults from "../components/ProductsResults";
import { ratingBox } from "../Utilities/utilities";

import { ProductType, fetchProducts } from "../FakerData/FakerData";

interface MultipleFilterType {
  brand: boolean[];
  rating: boolean[];
  price: boolean[];
}

const Products = () => {
  const [brandFilter, setbrandFilter] = useState(false);
  const [priceFilter, setpriceFilter] = useState(false);
  const [ratingFilter, setratingFilter] = useState(false);
  const [products, setProducts] = useState<ProductType[]>(fetchProducts());
  const [multipleFilters, setMultipleFilters] = useState<MultipleFilterType>({
    brand: [false, false],
    price: [false, false],
    rating: [false, false, false, false, false],
  });

  const [tempProducts, setTempProducts] = useState<ProductType[]>(
    fetchProducts()
  );

  useEffect(() => {
    setProducts(fetchProducts());
    setTempProducts(fetchProducts());
  }, []);

  useEffect(() => {
    let filteredData: ProductType[] = [];

    let brandFilterApplied = false;
    let priceFilterApplied = false;
    let ratingFilterApplied = false;

    if (multipleFilters.brand.includes(true)) {
      if (multipleFilters.brand[0]) {
        tempProducts.forEach((product) => {
          if (product.productName === "Intelligent Rubber Salad")
            filteredData.push(product);
        });
      }
      if (multipleFilters.brand[1]) {
        tempProducts.forEach((product) => {
          if (product.productName === "Sleek Metal Sausages")
            filteredData.push(product);
        });
      }
      brandFilterApplied = true;
    }

    if (multipleFilters.rating.includes(true)) {
      for (let i = 0; i < multipleFilters.rating.length; i++) {
        if (multipleFilters.rating[i]) {
          tempProducts.forEach((product) => {
            if (product.productRating === i + 1) {
              filteredData.push(product);
            }
          });
        }
      }
      priceFilterApplied = true;
    }

    if (multipleFilters.price[0]) {
      tempProducts.forEach((product) => {
        if (product.productDiscountPrice < 500) {
          filteredData.push(product);
        }
      });

      ratingFilterApplied = true;
    }

    if (multipleFilters.price[1]) {
      tempProducts.forEach((product) => {
        if (
          product.productDiscountPrice >= 1000 &&
          product.productDiscountPrice <= 3000
        ) {
          filteredData.push(product);
        }
      });
      ratingFilterApplied = true;
    }

    if (brandFilterApplied || priceFilterApplied || ratingFilterApplied) {
      setProducts(filteredData);
    } else {
      setProducts(tempProducts);
    }
  }, [multipleFilters, tempProducts]);

  console.log(multipleFilters);

  return (
    <div className="products_page">
      <ProductSearchBar  products={products}/>
      <h2>Search Results</h2>
      <div className="filter_and_result_container">
        <div className="filter_container">
          <div className="">
            <div
              onClick={() => setbrandFilter((prev) => !prev)}
              className="dropdown_container"
            >
              <div className="filter_title">BRAND</div>
              {brandFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {brandFilter && (
              <div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.brand[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.brand];
                      updatedFilter[0] = !updatedFilter[0];
                      setMultipleFilters({
                        ...multipleFilters,
                        brand: updatedFilter,
                      });
                    }}
                  />
                  <label>Incredible Frozen Table</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.brand[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.brand];
                      updatedFilter[1] = !updatedFilter[1];
                      setMultipleFilters({
                        ...multipleFilters,
                        brand: updatedFilter,
                      });
                    }}
                  />
                  <label>Tasty Wooden Car</label>
                </div>
              </div>
            )}
          </div>
          <div className="filter_divider"></div>
          <div className="">
            <div
              onClick={() => setpriceFilter((prev) => !prev)}
              className="dropdown_container"
            >
              <div className="filter_title">PRICE RANGE</div>
              {priceFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {priceFilter && (
              <div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.price[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.price];
                      updatedFilter[0] = !updatedFilter[0];
                      setMultipleFilters({
                        ...multipleFilters,
                        price: updatedFilter,
                      });
                    }}
                  />
                  <label>Under 500</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.price[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.price];
                      updatedFilter[1] = !updatedFilter[1];
                      setMultipleFilters({
                        ...multipleFilters,
                        price: updatedFilter,
                      });
                    }}
                  />
                  <label>1000 to 3000</label>
                </div>
              </div>
            )}
          </div>
          <div className="filter_divider"></div>
          <div className="">
            <div
              onClick={() => setratingFilter((prev) => !prev)}
              className="dropdown_container"
            >
              <div className="filter_title">RATINGS</div>
              {ratingFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {ratingFilter && (
              <div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[4]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[4] = !updatedFilter[4];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(5)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[3]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[3] = !updatedFilter[3];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(4)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[2]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[2] = !updatedFilter[2];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(3)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[1] = !updatedFilter[1];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(2)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[0] = !updatedFilter[0];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(1)}</label>
                </div>
              </div>
            )}
          </div>
        </div>
        <ProductsResults products={products} />
      </div>
    </div>
  );
};

export default Products;
