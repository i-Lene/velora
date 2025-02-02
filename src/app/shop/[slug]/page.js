"use client";

import { useParams } from "next/navigation";
import { getProduct } from "@/utils/util";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext";

export default function SlugPasge() {
  const [product, setProduct] = useState(null);
  const slug = useParams().slug;
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(slug);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  let price = product
    ? product.price.toLocaleString("pt-PT", {
        style: "currency",
        currency: "EUR",
      })
    : "";

  return (
    <div className="product-page">
      {product && (
        <>
          <div className="product-info">
            <div className="action-back">
              <Link className="back" href="/shop">
                <FontAwesomeIcon icon={faLongArrowLeft} />
                Back
              </Link>
            </div>
            <h1>{product.title}</h1>
            <p className="price">{price}</p>
            <p>{product.description}</p>
            <div className="actions">
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>{" "}
            </div>
          </div>
          <div className="product-image">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
            />
          </div>
        </>
      )}
    </div>
  );
}
