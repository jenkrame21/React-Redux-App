import React from 'react';
import { connect } from 'react-redux';

import { getCatFact } from '../actions/index';

const CatFact = ({ catFact, isFetching, error, getCatFact }) => {
    // useEffect(() => {
    //     getCatFact();
    // });

    if (error) {
        return <h2>Got no cat facts: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching Cat Facts~</h2>;
    }

    const handleClick = () => {
        getCatFact();
    };

    return(
        <>
            <div className="cat-facts">
                <h3>{catFact[0]}</h3>
                <h3>{catFact[1]}</h3>
                <h3>{catFact[2]}</h3>
                <h3>{catFact[3]}</h3>
                <h3>{catFact[4]}</h3>
            </div>
            <button onClick={handleClick}>Get Random Cat Fact</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        catFact: state.catFact,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getCatFact})(CatFact);