import { connect }          from 'react-redux';
import { onSetPrevPage } from '../actions';
import { onSetNextPage } from '../actions';

import Pagination       from '../components/Pagination';

const PaginationContainer =  connect(null, {
	onSetPrevPage,
	onSetNextPage
})(Pagination);

export default PaginationContainer;