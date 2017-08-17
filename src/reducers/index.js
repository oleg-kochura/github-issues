import { combineReducers }  from 'redux';
import issues               from './issues';
import repos                from './repos';
import form                 from './form';

export default combineReducers({
	issues,
	repos,
	form
});
