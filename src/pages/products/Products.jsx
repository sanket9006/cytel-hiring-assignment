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
            <h2>Product Name: {productname}</h2>
            <h3>Cities where it's sold:</h3>
            <ul>
                {product &&
                    product.cities.map((city, index) => (
                        <li key={index}>
                            {city.city} - Quantity: {city.quantity}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ProductPage;
