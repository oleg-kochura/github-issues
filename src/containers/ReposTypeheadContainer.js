import { connect }    from 'react-redux';
import ReposTypehead  from '../components/ReposTypehead';

const mapStateToProps = ({ repos: {data}, form }) => {
	return {
		value: form.repository,
		options: data.map(option => option.name)
	}
};

const ReposTypeheadContainer = connect(mapStateToProps, null)(ReposTypehead);

export default ReposTypeheadContainer;