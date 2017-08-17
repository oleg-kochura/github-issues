import {
	FETCH_ISSUES_PENDING,
	FETCH_ISSUES_REJECTED,
	FETCH_ISSUES_FULFILLED,
	FETCH_REPOS_PENDING,
	FETCH_REPOS_REJECTED,
	FETCH_REPOS_FULFILLED,
	SET_PER_PAGE_COUNT,
	UPDATE_FORM_FIELD,
	SET_PREV_PAGE,
	SET_NEXT_PAGE
}                         from '../constants';
import axios              from 'axios';

const base_url = 'https://api.github.com';


export function fetchUserRepos() {
	return (dispatch, getState) => {
		dispatch({type: FETCH_REPOS_PENDING});

		const state = getState();
		const { author } = state.form;

		axios.get(`${base_url}/users/${author}/repos?per_page=100`)
			.then(response => {
				dispatch({type: FETCH_REPOS_FULFILLED, payload: response.data})
			})
			.catch(err => {
				dispatch({type: FETCH_REPOS_REJECTED, payload: err})
			})
	}
}

export function fetchIssues() {
	return (dispatch, getState) => {
		dispatch({type: FETCH_ISSUES_PENDING});

		const state = getState();
		const { author, repository } = state.form;
		const { per_page, currentPage } = state.issues;

		axios.get(`${base_url}/repos/${author}/${repository}/issues?page=${currentPage}&per_page=${per_page}`)
			.then(response => {
				dispatch({type: FETCH_ISSUES_FULFILLED, payload: response.data})
			})
			.catch(err => {
				dispatch({type: FETCH_ISSUES_REJECTED, payload: err})
			})
	}
}

export function onFormFieldUpdate(key, value) {
	return {
		type: UPDATE_FORM_FIELD,
		key,
		value
	}
}

export function onSetPrevPage() {
	return dispatch => {
		dispatch({type: SET_PREV_PAGE});
		dispatch(fetchIssues())
	}
}

export function onSetNextPage() {
	return dispatch => {
		dispatch({type: SET_NEXT_PAGE});
		dispatch(fetchIssues())
	}
}

export function setPerPage(per_page) {
	return {
		type: SET_PER_PAGE_COUNT,
		per_page: +per_page
	}
}

export function onSetCountAndFetchIssues(per_page) {
	return dispatch => {
		dispatch(setPerPage(per_page));
		dispatch(fetchIssues())
	}
}