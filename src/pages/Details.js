import React            from 'react'
import DetailsContainer from '../containers/DetailsContainer'

const Details = ({ params: { id } }) => {
	return (
		<DetailsContainer id={+id} />
	)
};

export default Details;
