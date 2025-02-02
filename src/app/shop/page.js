"use client";

import { getProduts } from "@/utils/util";
import ProductCard from "@/components/Products/ProductCard";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faTh } from "@fortawesome/free-solid-svg-icons";

export default function ShopMainPage() {
  const [gridClassName, setGridClassName] = useState(
    "productsGrid productGrid4"
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProduts();
      setProducts(products);
    };
    fetchProducts();
  }, []);
  

  const handleGridChange = (gridSize) => {
    setGridClassName(`productsGrid productGrid${gridSize}`);
  };

  return (
    <>
      <div className="gridChanger">
        <button onClick={() => handleGridChange(4)} className="grid4">
          <FontAwesomeIcon icon={faThLarge} />
        </button>
        <button onClick={() => handleGridChange(6)} className="grid6">
          <FontAwesomeIcon icon={faTh} />
        </button>
      </div>
      <div className={gridClassName}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}