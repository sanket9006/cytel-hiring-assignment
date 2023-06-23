import React from 'react';
import { connect } from 'react-redux';
import { incrementCitiesVisited, incrementProductsVisited } from '../../redux/actions';

const CommonPage = ({ citiesVisited, productsVisited, incrementCitiesVisited, incrementProductsVisited }) => {

    return (
        <div className="p-4 min-w-screen flex items-center justify-center">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="text-lg mb-6">
                    <p className="mb-2">Cities Visited: {citiesVisited}</p>
                    <p className="mb-2">Products Visited: {productsVisited}</p>
                </div>
                <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleRefreshClick}
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

// Handle refresh button click
const handleRefreshClick = () => {
    window.location.reload()
};

const mapStateToProps = (state) => ({
    citiesVisited: state.citiesVisited,
    productsVisited: state.productsVisited,
});

const mapDispatchToProps = {
    incrementCitiesVisited,
    incrementProductsVisited,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonPage);
