import React              from 'react';
import { ListGroupItem }  from 'react-bootstrap';
import { Link }       from 'react-router';

const Issue = ({issue}) => (
	<Link to={`/issue/${issue.id}`}>
		<ListGroupItem header={issue.title}>#{issue['number']} opened {issue['created_at']} by {issue['user']['login']}</ListGroupItem>
	</Link>
);

export default Issue;