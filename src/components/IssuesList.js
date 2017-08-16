import React          from 'react';
import { ListGroup }  from 'react-bootstrap';
import Issue          from './Issue';

const IssuesList = ({issues}) => (
	<ListGroup>
		{issues.map(issue =>
				<Issue key={issue.id} issue={issue}/>
			)}
	</ListGroup>
);

export default IssuesList;