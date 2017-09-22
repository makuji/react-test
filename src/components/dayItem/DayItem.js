import React, { Component } from 'react';

import DayShedule from '../dayShedule/DayShedule'

class DayItem extends Component {

	renderShedule(props) {
		const shedule = props.shedule;
		const name = props.name;
		return (
				<div className="dayItemBody">
					<DayShedule name={name} deleteShedule={this.deleteShedule.bind(this)}
							copyShedule={this.copyShedule.bind(this)} newShedule={this.newShedule.bind(this)} saveChanges={this.saveChanges.bind(this)}/>
					{shedule.map((task, index) => 
						<DayShedule key={index} index={index} task={task} deleteShedule={this.deleteShedule.bind(this)}
							copyShedule={this.copyShedule.bind(this)} newShedule={this.newShedule.bind(this)} saveChanges={this.saveChanges.bind(this)}/>
						)}
				</div>
			);
	}

	handleCreateShedule(event) {
		event.preventDefault();
		// console.log(this.props.index);
		this.props.createShedule(this.props.index);
	}

	deleteShedule(indexShedule) {
		return this.props.deleteShedule(this.props.index, indexShedule);
	}

	copyShedule(indexShedule) {
		return this.props.copyShedule(this.props.index, indexShedule);
	}

	newShedule(indexShedule) {
		return this.props.newShedule(this.props.index, indexShedule);
	}

	saveChanges(place, time, activity, indexShedule) {
		return this.props.saveChanges(place, time, activity, indexShedule, this.props.index);
	}

	render() {
		return (
				<div className="dayListItem">
					<ul className="dayList">
						<li className="headList">
								<span className="place">Place</span>
								<span className="time">Time</span>
								<span className="activity">Activity</span>		
						</li>
						{this.renderShedule(this.props)}
					</ul>

					<a href="#" className="button" onClick={this.handleCreateShedule.bind(this)}>Shedule +</a>
				</div>
			);
	}
}

export default DayItem;