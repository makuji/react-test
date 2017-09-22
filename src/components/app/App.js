import React, { Component } from 'react';

// import components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DayItem from '../dayItem/DayItem';

//import style
import '../style/default.min.css'
import '../app/App.min.css'

const itinerary = [
	{
		name: 'Day 1',
		shedule: [
			{
				time: '15:00',
				place: 'Incheon',
				activity: 'Gather at depart place in Incheon airport',
			},
			{
				time: '07:10',
				place: 'KE 651',
				activity: 'Depart from Incheon airport',
			},
			{
				time: '21:05',
				place: 'Bangkok',
				activity: 'Arrive at Bangkok Suvarnabhumi Internation airport',
			},
			{
				time: '15:00',
				place: 'Pataya',
				activity: 'Move to Pataya Stay in hotel Hotel: THE ZIGN RESORT',
			},
		]
	},
	{
		name: 'Day 2',
		shedule: [
			{
				time: '15:00',
				place: 'Incheon',
				activity: 'Gather at depart place in Incheon airport',
			},
			{
				time: '07:10',
				place: 'KE 651',
				activity: 'Depart from Incheon airport',
			},
			{
				time: '21:05',
				place: 'Bangkok',
				activity: 'Arrive at Bangkok Suvarnabhumi Internation airport',
			},
		]
	}
];


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			itinerary
		};
	}

	renderDays() {
		// const itinerary = this.state.itinerary;
		return (
				<div>
				{this.state.itinerary.map((day, index) => 
					<DayItem key={index} index={index} name={day.name} shedule={day.shedule} createShedule={this.createShedule.bind(this)} 
						deleteShedule={this.deleteShedule.bind(this)} copyShedule={this.copyShedule.bind(this)} 
						newShedule={this.newShedule.bind(this)} saveChanges={this.saveChanges.bind(this)}/>
					)}
					<a href="#" className="button button-reverse" onClick={this.handleCreateDay.bind(this)}>Add Day</a>
				</div>
			);
	}

  render() {
    return (
      <div className="app">
        <Header />

       
        {this.renderDays()}

        <Footer />
      </div>
    );
  }
	
	handleCreateDay(event) {
		event.preventDefault();
		this.state.itinerary.push({
			name: 'Day ',
			shedule: [
				{
					place: '',
					time: '',
					activity: '',
				},
			]
		});
		this.setState({itinerary: this.state.itinerary})
	}

	saveChanges(place, time, activity, indexShedule, indexList) {
		this.state.itinerary[indexList].shedule[indexShedule].place = place;
		this.state.itinerary[indexList].shedule[indexShedule].time = time;
		this.state.itinerary[indexList].shedule[indexShedule].activity = activity;
		this.setState({itinerary: this.state.itinerary});
	}

  createShedule(index) {
		this.state.itinerary[index].shedule.push({
			place: '',
			time: '',
			activity: '',
		});
		this.setState({itinerary: this.state.itinerary});
  }

  deleteShedule(indexList, indexShedule) {
  	if(indexShedule === 'day') {
  		let start = this.state.itinerary.slice(0, +indexList);
  		let end = this.state.itinerary.slice(+indexList + 1);
  		this.state.itinerary = start.concat(end);
  	} else {
	  	let start = this.state.itinerary[indexList].shedule.slice(0, +indexShedule);
	  	let end = this.state.itinerary[indexList].shedule.slice(+indexShedule + 1);
	  	this.state.itinerary[indexList].shedule = start.concat(end);
	  }
  	this.setState({itinerary: this.state.itinerary});
  }

 copyShedule(indexList, indexShedule) {
	 	if(indexShedule === 'day') {
	 		let start = this.state.itinerary.slice(0, +indexList + 1);
	 		let end = this.state.itinerary.slice(+indexList);
	 		this.state.itinerary = start.concat(end);
	 	} else {
	  	let start = this.state.itinerary[indexList].shedule.slice(0, +indexShedule + 1);
	  	let end = this.state.itinerary[indexList].shedule.slice(+indexShedule);
	  	this.state.itinerary[indexList].shedule = start.concat(end);
  	}
  	this.setState({itinerary: this.state.itinerary});
  }

  newShedule(indexList, indexShedule) {
  	if(indexShedule === 'day') {
  		let start = this.state.itinerary.slice(0, +indexList);
  		start.push({
  			name: 'day',
  			shedule: [
					{
						place: '',
						time: '',
						activity: '',
					}
  			]
  		})
  		let end = this.state.itinerary.slice(+indexList);
  		this.state.itinerary = start.concat(end);
  	} else {
	  	let start = this.state.itinerary[indexList].shedule.slice(0, +indexShedule + 1);
	  	start.push({
				place: '',
				time: '',
				activity: '',
			});
	  	let end = this.state.itinerary[indexList].shedule.slice(+indexShedule + 1);
	  	this.state.itinerary[indexList].shedule = start.concat(end);
	  }
  	this.setState({itinerary: this.state.itinerary});
  }
}

export default App;
