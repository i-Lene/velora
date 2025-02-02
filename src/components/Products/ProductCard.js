import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import classes from "./productscard.module.css";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [formattedPrice, setFormattedPrice] = useState("");

  useEffect(() => {
    setFormattedPrice(
      product.price.toLocaleString("pt-PT", {
        style: "currency",
        currency: "EUR",
      })
    );
  }, [product.price]);

  return (
    <div className={classes.productCard}>
      <div className={classes.productImage}>
        <Link href={`/shop/${product.id}`}>
          <Image
            className={classes.productImage}
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className={classes.productInfo}>
        <Link href={`/shop/${product.id}`} className={classes.productTitle}>
          {product.title}
        </Link>
        <p className={classes.productCategory}>{product.category}</p>
        <p className="product-price">{formattedPrice}</p>
        <div className={classes.productActions}>
          <button className="btn btn-primary" 
          onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
