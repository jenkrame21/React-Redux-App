import { FETCHING_CATFACT_START, FETCHING_CATFACT_SUCCESS, FETCHING_CATFACT_FAILURE } from '../actions';

export const initialValues = {
    catFact: '',
    isFetching: false,
    error: ''
};

export const reducer = (state = initialValues, action) => {
    switch (action.type) {
        case (FETCHING_CATFACT_START):
            console.log(state)
            return({
                ...state,
                isFetching: true,
                error: ''
            }) 
        case (FETCHING_CATFACT_SUCCESS):
            return({
                ...state,
                catFact: action.payload.map(fact => {
                    return fact.text
                }),
                isFetching: false
            }) 
        case (FETCHING_CATFACT_FAILURE):
            return({
                ...state,
                error: action.payload
            }) 
        default:
            return state;
    }
};