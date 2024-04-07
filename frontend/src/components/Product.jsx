import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import placeholder from '../../public/backgroundImage.png';
import Star from '../../public/star.svg';

export default function Product({ product }) {

    // swap placeholder with product.mainImage when there is time
    return (
        <div>
            <div className="px-9 pt-9 pb-4">
                <Image src={placeholder} width="245px" height="327px" alt="Product Image" />
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