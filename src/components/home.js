import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
 
import "react-datepicker/dist/react-datepicker.css";

export default class Home extends React.Component{
	constructor(props) {
		super(props);
	    this.state = {
	    	selectedDate: new Date(),
	    	note: null,
	    	events : []
	    }
	}

	logout = () =>{
    	sessionStorage.clear();
    	window.location.reload();
    }

    addNote = () =>{
    	let event = { 
			dt: this.state.selectedDate,
			note: this.state.note
		};

    	this.setState({events: [...this.state.events, event]});
    }

	render(){
		return(
			<div className="container">
			<Button onClick={this.logout} className="mt-n5 float-right">Logout</Button>
    		<div className="row mt-5">
    			<div className="col">
				<DatePicker
			        selected={this.state.selectedDate}
			        onChange={(date)=>this.setState({selectedDate: date})}
			      />
			     </div>
			     <div className="col">
			    <FormControl as="textarea" rows="2" value={this.state.note}
			    onChange={(event)=>this.setState({note: event.target.value})} />
			    </div>
			    <div className="col">
			    <Button onClick={this.addNote}>Add Note</Button>
			    </div>
		    </div>
		    <div className="row">
		    <ol>
		    {this.state.events.map((item, index) => (
		        <li>You have {item.note} on {moment(item.dt).format("DD/MM/YYYY")}</li>
		    ))}
		    </ol>
		    </div>
		    </div>
		);
	}
}
