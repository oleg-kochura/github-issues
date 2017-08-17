import { connect }        from 'react-redux';
import InputAuthor        from '../components/InputAuthor';
import { fetchUserRepos } from '../actions';


const mapStateToProps = ({form}) => {
	return {
		value: form.author,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUserRepos: () => {
			dispatch(fetchUserRepos())
		}
	}
};

const InputAuthorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputAuthor);

export default InputAuthorContainer;