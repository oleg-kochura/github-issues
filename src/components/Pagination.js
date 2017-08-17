import React from     'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

const Pagination = ({onSetPrevPage, onSetNextPage}) => (
		<ButtonToolbar>
			<ButtonGroup>
				<Button onClick={onSetPrevPage}>Prev</Button>
				<Button onClick={onSetNextPage}>Next</Button>
			</ButtonGroup>
		</ButtonToolbar>
);

export default Pagination;

