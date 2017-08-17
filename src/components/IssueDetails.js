import React from 'react';
import { Panel, Button }   from 'react-bootstrap';
import { Link }       from 'react-router';


const IssueDetails = ({issue}) => (
	<div>
		<Link to="/">
			<Button bsStyle="link">{'<- Back'}</Button>
		</Link>
		<Panel header={issue[0].title} bsStyle="primary">
			{issue[0].body}
		</Panel>
	</div>
);

export default IssueDetails;