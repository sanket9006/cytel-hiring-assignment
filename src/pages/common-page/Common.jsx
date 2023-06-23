import React from 'react';
import { connect } from 'react-redux';
import { incrementCitiesVisited, incrementProductsVisited } from '../../redux/actions';

const CommonPage = ({ citiesVisited, productsVisited, incrementCitiesVisited, incrementProductsVisited }) => {

    return (
        <div>
            <div>
                Cities Visited: {citiesVisited} <br />
                <br />
                Products Visited: {productsVisited} <br />
                <br />
                <button onClick={() => handleRefreshClick()}>Refresh</button>
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
