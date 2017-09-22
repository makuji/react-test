// DONT NEED COMPONENT

import React, { Component } from 'react';

import DayItem from '../dayItem/DayItem'

import './DayList.min.css'

class DayList extends Component {

	createShedule(index) {
		return this.props.createShedule(index);
	}

	deleteShedule(indexList, indexShedule) {
		return this.props.deleteShedule(indexList, indexShedule);
	}

	copyShedule(indexList, indexShedule) {
		return this.props.copyShedule(indexList, indexShedule);
	}

	newShedule(indexList, indexShedule) {
		return this.props.newShedule(indexList, indexShedule);
	}

	handleCreateDay(event) {
		event.preventDefault();
		this.props.createDay();
	}

	renderDays(props) {
		const itinerary = props.itinerary;
		return (
				<div>
				{itinerary.map((day, index) => 
					<DayItem key={index} index={index} shedule={day.shedule} createShedule={this.createShedule.bind(this)} 
						deleteShedule={this.deleteShedule.bind(this)} copyShedule={this.copyShedule.bind(this)} newShedule={this.newShedule.bind(this)}/>
					)}
				</div>
			);
	}

	render() {
		return (
				<div>
					{this.renderDays(this.props)}
					<a href="#" className="button button-reverse" onClick={this.handleCreateDay.bind(this)}>Add Day</a>
				</div>
			);
	}
}

export default DayList;