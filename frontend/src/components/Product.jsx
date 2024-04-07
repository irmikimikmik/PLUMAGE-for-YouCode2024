import React, { useEffect, useState } from "react";
import Image from "next/image";
import Star from "../../public/star.svg";

export default function Product({ product }) {
  const validateImageSrc = (src) => {
    if (!src) return "./IMAGE.png"; // Fallback if src is falsy
    if (
      src.startsWith("/") ||
      src.startsWith("http://") ||
      src.startsWith("https://")
    ) {
      return src; // Src is valid
    }
    return "/IMAGE.png"; // Fallback for invalid src
  };

  const imageUrl = validateImageSrc(product.mainImage);

  // swap placeholder with product.mainImage when there is time
  return (
    <div>
      <div className="px-9 pt-9 pb-4 items-center">
      <Image src={imageUrl} width="143" height="181" alt="Product Image" className="w-full place-content-center px-12"/>
        <div className="items-center">
          <div className="space-y-2 mt-6">
            <p className="uppercase font-bold">{product.analytics_name}</p>
            <p>{product.description}</p>
          </div>
          <div className="space-y-2 mt-6">
            <p className="font-bold">
              ${parseFloat(product.price_ca).toFixed(2)}
            </p>
            <div className="flex px-12">
              <Image width="15px" src={Star} alt="Star Rating" />
              <Image width="15px" src={Star} alt="Star Rating" />
              <Image width="15px" src={Star} alt="Star Rating" />
              <Image width="15px" src={Star} alt="Star Rating" />
              <Image width="15px" src={Star} alt="Star Rating" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
