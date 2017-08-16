import {
	FETCH_ISSUES_PENDING,
	FETCH_ISSUES_REJECTED,
	FETCH_ISSUES_FULFILLED,
	SET_PER_PAGE_COUNT,
	SET_PREV_PAGE,
	SET_NEXT_PAGE
}                         from '../constants';


const initialState = {
	fetching: false,
	fetched: false,
	per_page: 10,
	currentPage: 1,
	data: [],
	error: null
};


export default function issues(state = initialState, action) {
	switch (action.type) {
		case FETCH_ISSUES_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_ISSUES_REJECTED:
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		case FETCH_ISSUES_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload
			};
		case SET_PER_PAGE_COUNT:
			return {
				...state,
				per_page: action.per_page
			};
		case SET_NEXT_PAGE:
			return {
				...state,
				currentPage: ++state.currentPage
			};
		case SET_PREV_PAGE:
			if (state.currentPage > 1) {
				return {
					...state,
					currentPage: --state.currentPage
				};
			}
			else return state;
		default:
			return state;
	}
}