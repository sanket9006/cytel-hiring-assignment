import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCityList, setUniqueProductNames, incrementCitiesVisited, incrementProductsVisited } from '../../redux/actions';

const Homepage = () => {
    const dispatch = useDispatch();
    const cityList = useSelector(state => state.cityList);
    const uniqueProductNames = useSelector(state => state.uniqueProductNames);
    const isInitialRender = React.useRef(true);

    useEffect(() => {
        // To avoid rendering twice in development mode
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        fetchCityList();
    }, []);

    const fetchCityList = async () => {
        try {
            const response = await fetch('https://assessments.reliscore.com/api/cities/');
            const data = await response.json();
            dispatch(setCityList(data.data));
            fetchProductNamesForCities(data.data);
        } catch (error) {
            console.log('Error fetching city list:', error);
        }
    };

    const fetchProductNamesForCities = async cities => {
        try {
            const updatedCityList = await Promise.all(
                cities.map(async city => {
                    const response = await fetch(`https://assessments.reliscore.com/api/sales/${city}/`);
                    const data = await response.json();
                    const products = Object.entries(data.data).map(([productName, quantity]) => ({
                        productName,
                        quantity,
                        cities: [city] // Initialize the cities array with the current city
                    }));
                    return { city, products };
                })
            );
            dispatch(setCityList(updatedCityList));
            updateUniqueProductNames(updatedCityList);
        } catch (error) {
            console.log('Error fetching product names for cities:', error);
        }
    };


    const updateUniqueProductNames = cityList => {
        const productMap = new Map();
        cityList.forEach(city => {
            city.products.forEach(product => {
                if (productMap.has(product.productName)) {
                    // If the product already exists in the map, increment the quantity and add the city
                    const existingProduct = productMap.get(product.productName);
                    existingProduct.quantity += product.quantity;
                    existingProduct.cities = [...existingProduct.cities, { city: city.city, quantity: product.quantity }]
                } else {
                    // Otherwise, add the product with its initial quantity and city
                    productMap.set(product.productName, {
                        productName: product.productName,
                        quantity: product.quantity,
                        cities: [{ city: city.city, quantity: product.quantity }]
                    });
                }
            });
        });

        const uniqueProducts = Array.from(productMap.values());
        dispatch(setUniqueProductNames(uniqueProducts));
    };



    const handleCityClick = () => {
        dispatch(incrementCitiesVisited());
    };

    const handleProductClick = () => {
        dispatch(incrementProductsVisited());
    };

    return (
        <div>
            <h2>List of Cities:</h2>
            <ul>
                {cityList.map((city, index) => (
                    <li key={index}>
                        <Link to={`/city/${city.city}`} onClick={handleCityClick}>
                            {city.city}
                        </Link>
                    </li>
                ))}
            </ul>
            <h2>Unique Products across all cities:</h2>
            <ul>
                {uniqueProductNames.map((product, index) => (
                    <li key={index} onClick={() => handleProductClick(product.productName)}>
                        <Link to={`/product/${product.productName}`}>
                            {product.productName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Homepage;