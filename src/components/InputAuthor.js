import React from 'react';
import { FormGroup, FormControl, ControlLabel }   from 'react-bootstrap';


const InputAuthor = ({onChange, fetchUserRepos, value}) => (
	<FormGroup>
		<ControlLabel>Author</ControlLabel>
		<FormControl type="text"
		             onBlur={fetchUserRepos}
		             name="author"
		             value={value}
		             onChange={onChange}/>
	</FormGroup>
);

export default  InputAuthor;
