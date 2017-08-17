import { connect }  from 'react-redux';
import IssueDetails from '../components/IssueDetails'

const mapStateToProps = ({ issues: { data }}, props) => {
	return {
		issue: data.filter(issue => issue.id === props.id)
	}
};

const DetailsContainer =  connect(mapStateToProps, null)(IssueDetails);

export default DetailsContainer;
