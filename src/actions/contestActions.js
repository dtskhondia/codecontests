import * as actionTypes from './actionTypes';
import config from '../config';

export const fetchContestsBegin = () =>({
    type: actionTypes.FETCH_CONTESTS_BEGIN
});

export const fetchContestsSucess = (contests) =>({
    type: actionTypes.FETCH_CONTESTS_SUCCESS,
    payload: { contests }
});

export const fetchContestsFailure = (error) =>({
    type: actionTypes.FETCH_CONTESTS_FAILURE,
    payload: { error }
});

export function fetchContests(){
    return (dispatch) => {
        dispatch(fetchContestsBegin());
        return fetch(config.apiGateway.URL)
        .then( response => response.json())
        .then( response =>{
            dispatch(fetchContestsSucess(response));
        })
        .catch(error => {
            dispatch(fetchContestsFailure(error));
        });
    };
}