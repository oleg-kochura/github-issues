import React            from 'react';
import { ControlLabel } from 'react-bootstrap';
import { FormControl }  from 'react-bootstrap';
import { FormGroup }    from 'react-bootstrap';


const PerPage = ({onChangeCount, per_page}) => (
	<FormGroup>
		<ControlLabel>Per page</ControlLabel>
		<FormControl componentClass="select"
		             value={per_page}
		             onChange={(e) => onChangeCount(e.target.value)}>
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="30">30</option>
			<option value="40">50</option>
		</FormControl>
	</FormGroup>
);

export default PerPage;