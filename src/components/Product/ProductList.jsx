import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import "bootstrap/dist/css/bootstrap.css";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <table className="table">
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <ProductItem product={product} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;


