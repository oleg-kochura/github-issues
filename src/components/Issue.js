import React      from 'react';
import { Media }  from 'react-bootstrap';
import { Link }   from 'react-router';

const Issue = ({issue}) => (
	<Media>
		<Media.Left>
			<a href={issue.user.html_url}>
				<h4>{issue.user.login}</h4>
				<img width={64} height={64} src={issue.user.avatar_url} alt="avatar"/>
				<p>{issue.user.html_url}</p>
			</a>
		</Media.Left>
		<Media.Body>
			<Link to={`/issue/${issue.id}`}>
				<Media.Heading>{issue.title}</Media.Heading>
				<p>#{issue.number} opened {issue.created_at} by {issue.user.login}</p>
			</Link>
		</Media.Body>
	</Media>
);

export default Issue;