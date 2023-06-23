import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const City = () => {
    const { cityname } = useParams();
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        fetchProductData();
    }, [cityname]);

    const fetchProductData = async () => {
        try {
            const response = await fetch(`https://assessments.reliscore.com/api/sales/${cityname}`);
            const data = await response.json();
            setProductData(data.data);
        } catch (error) {
            console.log('Error fetching product data:', error);
        }
    };

    return (
        <div>
            <h2 className='font-bold'>Products Sold in {cityname}:</h2>
            {productData ? (
                <div className='ml-8'>
                    <ul className='list-decimal'>
                        {Object.entries(productData).map(([productName, sales]) => (
                            <li key={productName}>
                                {productName}: {sales}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading product data...</p>
            )}
        </div>
    );
};

export default City;
