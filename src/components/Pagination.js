import React from     'react';
import { Button } from 'react-bootstrap';

const Pagination = ({onSetPrevPage, onSetNextPage}) => (
	<div>
		<Button onClick={() => onSetPrevPage()}>Prev</Button>
		<Button onClick={() => onSetNextPage()}>Next</Button>
	</div>
);

export default Pagination;

