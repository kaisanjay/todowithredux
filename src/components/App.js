import React from 'react';
import { connect } from 'react-redux';
import '../index.css'
import { addReminder, deleteReminder } from '../actions';

class App extends React.Component {
	state = {
		text: '',
		dueDate: ''
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	addReminder = () => {
		console.log('this.state.dueDate', this.state.dueDate);
		this.props.addReminder(this.state.text, this.state.dueDate);
	}

	deleteReminder(id) {
		this.props.deleteReminder(id);
	}

	renderReminders= () => {
		const { reminders } = this.props;
		return (
			<ul className="list-group col-sm-4">
			  {
			  	reminders.map(reminder => {
			  		return (
			  			<li key={reminder.id} className="list-group-item">
			  			  <div className="list-item">
			  			    {reminder.text}
			  			  </div>
			  			  <button onClick={() => this.deleteReminder(reminder.id)} className="btn btn-danger list-item delete-button">
			  			    &#x2715;
			  			  </button>
			  			</li>
			  			)
			  	})
			  }
			</ul>
			)
		
	}

	render(){
		return (
			<div className="App">
				<div className="title">
				Reminder Pro

				</div>
				<div className="form-inline">
					 <div className="form-group">
					  <input 
					     className="form-control"
					     placeholder=" I have to..."
					     onChange={this.handleChange} 
					   />
					 </div>
					 <div>
					 <input className="form-control"
					        type="datetime-local"
					        onChange={event => this.setState({dueDate: event.target.value})} 
					 />
					 <button
					    type="button"
					    className="btn btn-success"
					    onClick={this.addReminder}
					    >
					    Add Reminder
					 </button>
					 </div>


				</div>
				  {this.renderReminders()}
			</div>

			)
	}

}

function mapStateToProps(state) {
	console.log('state', state);
	return {
		reminders: state
	}
}



export default connect(mapStateToProps, { addReminder, deleteReminder })(App);