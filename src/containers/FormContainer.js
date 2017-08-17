import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { fetchIssues }        from '../actions';
import { onFormFieldUpdate }  from '../actions';
import LoadButtonContainer    from '../containers/LoadButtonContainer';
import ReposTypeheadContainer from '../containers/ReposTypeheadContainer';
import InputAuthorContainer   from '../containers/InputAuthorContainer';
import PerPageContainer       from '../containers/PerPageContainer';


class FormContainer extends Component {

	handleInputChange = ({target: {name, value}}) => {
		this.props.onFormFieldUpdate(name, value);
	};

	submitForm = (e) => {
		e.preventDefault();
		this.props.fetchIssues();
	};

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<InputAuthorContainer onChange={this.handleInputChange}/>
				<ReposTypeheadContainer onChange={this.handleInputChange}/>
				<PerPageContainer />
				<LoadButtonContainer />
			</form>
		);
	}
}


export default connect(null, {
	fetchIssues,
	onFormFieldUpdate
})(FormContainer);