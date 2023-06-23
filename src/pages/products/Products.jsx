import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductPage = () => {
    const { productname } = useParams();
    const uniqueProductNames = useSelector(state => state.uniqueProductNames);
    // Find the product with the matching productname
    const product = uniqueProductNames.find(
        product => product.productName === productname
    );

    return (
        <div>
            <h2 className='font-bold'>Product Name: {productname}</h2>
            <h3 className='font-bold'>Cities where it's sold:</h3>
            <div className='ml-8'>
                <ul>
                    {product &&
                        product.cities.map((city, index) => (
                            <li className='list-decimal' key={index}>
                                {city.city} - <span className='text-blue-500'>Quantity: {city.quantity}</span>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;
