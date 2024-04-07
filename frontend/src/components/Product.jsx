import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import placeholder from '../../public/defaultImage.avif';
import Star from '../../public/star.svg';

export default function Product({ product }) {
    const validateImageSrc = (src) => {
        if (!src) return '/defaultImage.avif'; // Fallback if src is falsy
        if (src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://')) {
            return src; // Src is valid
        }
        return '/defaultImage.avif'; // Fallback for invalid src
    };

    const imageUrl = validateImageSrc(product.mainImage);

    return (
        <div>
            <div className="px-9 pt-9 pb-4">
                <Image src={imageUrl} width="245" height="327" alt="Product Image" />
                <div>
                    <div className="space-y-2 mt-6">
                        <p className="uppercase font-bold">{product.analytics_name}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="space-y-2 mt-6">
                        <p className="font-bold">${parseFloat(product.price_ca).toFixed(2)}</p>
                        <div className="flex">
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