import React              from 'react';
import { connect }        from 'react-redux';
import { onSetPrevPage }  from '../actions';
import { onSetNextPage }  from '../actions';

import Pagination         from '../components/Pagination';

const PaginationContainer = (props) => (

	props.isFetched
		? <Pagination {...props}/>
		: null
);

const mapStateToProps = ({ issues: { fetched }}) => {
	return {
		isFetched: fetched
	}
};

export default connect(mapStateToProps, {
	onSetPrevPage,
	onSetNextPage
})(PaginationContainer);
