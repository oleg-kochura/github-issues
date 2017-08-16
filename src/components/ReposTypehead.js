import React  from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';


const ReposTypehead = ({ options, onChange }) => (
	<Typeahead options={options}
	           onBlur={onChange}
	           name='repository'/>
);

export default ReposTypehead;