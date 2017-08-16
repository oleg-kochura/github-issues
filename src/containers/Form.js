import React, { Component } from 'react';
import { fetchIssues } from '../actions';
import { fetchUserRepos } from '../actions';
import { onSetPerPageCount } from '../actions';
import { onFormFieldUpdate } from '../actions';
import { Form }   from 'react-bootstrap';
import { FormGroup }   from 'react-bootstrap';
import { FormControl }   from 'react-bootstrap';
import { ControlLabel }   from 'react-bootstrap';
import PerPage            from '../components/PerPage';
import LoadingButton      from '../components/LoadingButton';
import ReposTypehead      from '../components/ReposTypehead';
import { connect }    from 'react-redux';


class FormContainer extends Component {

	handleInputChange = ({target: {name, value}}) => {
		console.log(name);
		console.log(value);
		this.props.onFormFieldUpdate(name, value);
	};

	submitForm = (e) => {
		e.preventDefault();
		this.props.fetchIssues();
	};

	render() {
		const { per_page, onSetPerPageCount, fetchUserRepos, form, fetching, repos } = this.props;
		const disabled = !form.author || !form.repository;
		const onFetching = fetching || repos.fetching;

		return (
			<Form inline onSubmit={this.submitForm}>


				<PerPage per_page={per_page}
				         onSelect={onSetPerPageCount}/>
				{' '}

				<FormGroup>
					<ControlLabel>Author</ControlLabel>
					{' '}
					<FormControl type="text"
					             onBlur={fetchUserRepos}
					             name="author"
					             onChange={this.handleInputChange}/>
				</FormGroup>
				{' '}

				<FormGroup>
					<ReposTypehead options={this.props.repos.data.map(option => option.name)}
					               onChange={this.handleInputChange}/>
				</FormGroup>
				{' '}

				<LoadingButton disabled={disabled}
				               fetching={onFetching}/>
			</Form>
		);
	}
}

const mapStateToProps = ({form, issues: {per_page, fetching}, repos}) => {
	return {
		form,
		repos,
		per_page,
		fetching
	}
};

export default connect(mapStateToProps, {
	fetchIssues,
	fetchUserRepos,
	onSetPerPageCount,
	onFormFieldUpdate
})(FormContainer);