export const incrementCitiesVisited = () => ({
    type: 'INCREMENT_CITIES_VISITED',
});

export const incrementProductsVisited = () => ({
    type: 'INCREMENT_PRODUCTS_VISITED',
});

export const setCityList = cityList => ({
    type: 'SET_CITY_LIST',
    payload: cityList,
});

export const setUniqueProductNames = uniqueProductNames => ({
    type: 'SET_UNIQUE_PRODUCT_NAMES',
    payload: uniqueProductNames,
});

  // Add more actions as needed
