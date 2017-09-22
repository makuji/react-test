import React, { Component } from 'react';

class DayShedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rowActive: '',
			editCell: false,
		}
	}

	handleMenu() {
		if(this.state.rowActive && !this.state.editCell) this.setState({editCell: true});
		else if(!this.state.rowActive) this.setState({rowActive: 'active', editCell: false});
		else if(this.state.rowActive && this.state.editCell) this.setState({editCell: false});
		// else if (this.state.rowActive && !this.state.editCell) this.setState({editCell: true});
		else this.setState({rowActive: ''});
	}

	handleDeleteShedule(event) {
		event.preventDefault();
		if(this.props.hasOwnProperty('name')) this.props.deleteShedule('day');
		else this.props.deleteShedule(this.props.index);
		this.setState({rowActive: ''});
	}

	handleCopyShedule(event) {
		event.preventDefault();
		if(this.props.hasOwnProperty('name')) this.props.copyShedule('day');
		else this.props.copyShedule(this.props.index);
		this.setState({rowActive: ''});
	}

	handleNewShedule(event) {
		event.preventDefault();
		if(this.props.hasOwnProperty('name')) this.props.newShedule('day');
		else this.props.newShedule(this.props.index);
		this.setState({rowActive: ''});
	}

	handleSave(event) {
		event.preventDefault();
		this.props.saveChanges(this.refs.editPlace.value, this.refs.editTime.value, this.refs.editActivity.value, this.props.index);
		this.setState({rowActive: ''});
	}

	handleCancel(event) {
		event.preventDefault();
		this.setState({rowActive: '', editCell: false});
	}

	

	renderRow(props) {
		const task = props.task;
		const name = props.name;
		if(props.hasOwnProperty('name')) {
			return (
					<li className={this.state.rowActive} onClick={this.handleMenu.bind(this)}>
						<span className="name h2">{name}</span>
					</li>
				);
		} else if(this.state.rowActive === 'active') {
			return (
					<li className={this.state.rowActive} onClick={this.handleMenu.bind(this)}>
						<span className="place"><textarea type="text" rows="3" defaultValue={task.place} ref="editPlace" /></span>
						<span className="time"><textarea type="text" rows="3" defaultValue={task.time} ref="editTime" /></span>
						<span className="activity"><textarea type="text" rows="3" defaultValue={task.activity} ref="editActivity" /></span>
					</li>
				);
		}
		return (
				<li className={this.state.rowActive} onClick={this.handleMenu.bind(this)}>
					<span className="place">{task.place}</span>
					<span className="time">{task.time}</span>
					<span className="activity">{task.activity}</span>
				</li>
			)
	}

	render() {
		return (
					<div>
						{this.renderRow(this.props)}
						<div className={'sheduleMenu ' + this.state.rowActive}>
							<ul>
								<li><a href="#" onClick={this.handleCancel.bind(this)}>Cancel</a></li>
								<li><a href="#" onClick={this.handleSave.bind(this)}>Save</a></li>
								<li><a href="#" onClick={this.handleNewShedule.bind(this)}>New</a></li>
								<li><a href="#" onClick={this.handleCopyShedule.bind(this)}>Copy</a></li>
								<li><a href="#" onClick={this.handleDeleteShedule.bind(this)}>Delete</a></li>
							</ul>
						</div>
					</div>
			);
	}
}

export default DayShedule;