import React from 'react';
import { connect } from 'react-redux';
import '../index.css'
import { addReminder } from '../actions';

class App extends React.Component {
	state = {
		text: ''
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	addReminder = () => {
		this.props.addReminder(this.state.text);
	}

	renderReminders() {
		const { reminders } = this.props;
		return (
			<ul className="list-group col-sm-4">
			  {
			  	reminders.map(reminder => {
			  		return (
			  			<li key={reminder.id} className="list-group-item">
			  			  <div>
			  			    {reminder.text}
			  			  </div>
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



export default connect(mapStateToProps, { addReminder })(App);