// reducers.js
const initialState = {
    citiesVisited: 0,
    productsVisited: 0,
    cityList: [],
    uniqueProductNames: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_CITIES_VISITED':
            return { ...state, citiesVisited: state.citiesVisited + 1 };

        case 'INCREMENT_PRODUCTS_VISITED':
            return { ...state, productsVisited: state.productsVisited + 1 };

        case 'SET_CITY_LIST':
            return { ...state, cityList: action.payload };

        case 'SET_UNIQUE_PRODUCT_NAMES':
            return { ...state, uniqueProductNames: action.payload };

        // Add more cases to handle other actions

        default:
            return state;
    }
};

export default rootReducer;
