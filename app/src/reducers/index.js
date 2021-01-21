// Actions
import { FETCHING_INSULT_START, FETCHING_INSULT_SUCCESS, FETCHING_INSULT_FAILURE } from '../actions';

export const initialValues = {
    insult: '',
    isFetching: false,
    error: ''
};

export const reducer = (state = initialValues, action) => {
    switch (action.type) {
        case (FETCHING_INSULT_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            }) 
        case (FETCHING_INSULT_SUCCESS):
            return({
                ...state,
                insult: action.payload,
                isFetching: false
            }) 
        case (FETCHING_INSULT_FAILURE):
            return({
                ...state,
                error: action.payload
            }) 
        default:
            return state;
    }
};