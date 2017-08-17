import React                from 'react';
import FormContainer        from '../containers/FormContainer';
import IssuesListContainer  from '../containers/IssuesListContainer';
import PaginationContainer  from '../containers/PaginationContainer';


const Home = () => (
	<div>
		<FormContainer />
		<IssuesListContainer />
		<PaginationContainer />
	</div>
);

export default Home;
