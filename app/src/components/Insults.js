import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getInsult } from '../actions';

const Insults = ({ insult, isFetching, error, getInsult }) => {
    useEffect(() => {
        getInsult();
    }, []);

    if (error) {
        return <h2>Got no insults for ya. Try again later. {error}</h2>;
    };

    if (isFetching) {
        return <h2>Lemme think of that insult for ya.</h2>;
    };
    
    const handleClick = () => {
        getInsult();
    };

    return(
        <>
            <h2>{insult}</h2>
            <button onClick={handleClick}>Get Insulted</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        insult: state.insult,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getInsult})(Insults);