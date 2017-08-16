import {
	FETCH_REPOS_PENDING,
	FETCH_REPOS_REJECTED,
	FETCH_REPOS_FULFILLED
}                         from '../constants';


const initialState = {
	fetching: false,
	fetched: false,
	per_page: 50,
	data: [],
	error: null
};


export default function repos(state = initialState, action) {
	switch (action.type) {
		case FETCH_REPOS_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_REPOS_REJECTED:
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		case FETCH_REPOS_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload
			};
		default:
			return state;
	}
}