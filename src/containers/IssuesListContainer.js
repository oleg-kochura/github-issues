import { connect }  from 'react-redux';
import IssuesList   from '../components/IssuesList';


const mapStateToProps = ({issues: {data}}) => {
	return {
		issues: data
	}
};

const IssuesListContainer =  connect(mapStateToProps, null)(IssuesList);

export default IssuesListContainer;