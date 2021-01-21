import axios from 'axios';

export const FETCHING_CATFACT_START = "FETCHING_CATFACT_START";
export const FETCHING_CATFACT_SUCCESS = "FETCHING_CATFACT_SUCCESS";
export const FETCHING_CATFACT_FAILURE = "FETCHING_CATFACT_SUCCESS";

export const getCatFact = () => {
    return (dispatch => {

        dispatch({ type: FETCHING_CATFACT_START });

        axios
            .get('https://cat-fact.herokuapp.com/facts/')
            .then((res) => {
                console.log(res.data)
                dispatch({ type: FETCHING_CATFACT_SUCCESS, payload: res.data});
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: FETCHING_CATFACT_FAILURE, payload: err});
            });
    });
};


