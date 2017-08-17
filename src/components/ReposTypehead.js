import React                        from 'react';
import { Typeahead }                from 'react-bootstrap-typeahead';
import { FormGroup, ControlLabel }  from 'react-bootstrap';


const ReposTypehead = ({ options, onChange, value }) => (
	<FormGroup>
		<ControlLabel>Repository</ControlLabel>
		<Typeahead options={options}
		           onBlur={onChange}
		           selected={[value]}
		           name='repository'/>
	</FormGroup>
);

export default ReposTypehead;