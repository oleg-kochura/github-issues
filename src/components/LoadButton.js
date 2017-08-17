import React  from 'react';
import Button from 'react-bootstrap-button-loader';

const LoadButton = ({ disabled, fetching }) => (
	<Button type="submit"
	        bsStyle="primary"
	        spinColor="#fff"
	        disabled={disabled}
	        loading={fetching}>
		Load
	</Button>
);

export default LoadButton;