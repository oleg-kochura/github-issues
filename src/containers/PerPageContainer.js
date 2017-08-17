import { connect }                              from 'react-redux';
import { onSetCountAndFetchIssues, setPerPage } from '../actions';
import PerPage                                  from '../components/PerPage';


const mapStateToProps = ({issues: {per_page, fetched}}) => {
	return {
		per_page,
		isDataFetched: fetched
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetCountAndFetchIssues: (val) => {
			dispatch(onSetCountAndFetchIssues(val))
		},
		setPerPage: (val) => {
			dispatch(setPerPage(val))
		}
	}
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return Object.assign({}, ownProps, {
		stateProps,
		onChangeCount: (val) => {
			stateProps.isDataFetched
				? dispatchProps.onSetCountAndFetchIssues(val)
				: dispatchProps.setPerPage(val)
		}
	})
};

const PerPageContainer =  connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(PerPage);

export default PerPageContainer;