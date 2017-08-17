import { connect }  from 'react-redux';
import LoadButton   from '../components/LoadButton';

const mapStateToProps = ({ form, issues, repos }) => {
	return {
		disabled: !form.author || !form.repository,
		fetching: issues.fetching || repos.fetching
	}
};

const LoadButtonContainer =  connect(mapStateToProps, null)(LoadButton);

export default LoadButtonContainer;