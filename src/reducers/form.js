import { UPDATE_FORM_FIELD }                         from '../constants';


const initialState = {
	author: '',
	repository: ''
};


export default function form(state = initialState, action) {
	switch (action.type) {
		case UPDATE_FORM_FIELD:
			return {
				...state,
				[action.key]: action.value
			};
		default:
			return state;
	}
}