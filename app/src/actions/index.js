import axios from 'axios';

export const FETCHING_INSULT_START = "FETCHING_INSULT_START";
export const FETCHING_INSULT_SUCCESS = "FETCHING_INSULT_SUCCESS";
export const FETCHING_INSULT_FAILURE = "FETCHING_INSULT_SUCCESS";

export const getInsult = () => {
    return (dispatch => {

        dispatch({ type: FETCHING_INSULT_START });

        axios
            .get('https://evilinsult.com/api/#insults')
            .then((res) => {
                console.log(res.data)
                // dispatch({ type: FETCHING_INSULT_SUCCESS, payload: res.data});
            })
            .catch((err) => {
                console.log(err);
                // dispatch({ type: FETCHING_INSULT_FAILURE, payload: err});
            });
    });
};


