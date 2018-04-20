import React from 'react';
import { connect } from 'react-redux';
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
			</div>

			)
	}

}



export default connect(null, { addReminder })(App);