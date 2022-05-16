import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from "react-bootstrap";

class DetailParser extends Component {


	/**
	Crates new instance of the class
	 */
	constructor(props) {
		super(props);
		this.state = {
			processing: false,
			progress: 0,
			items: [],
			inputValue: '',
			inputChanged: false,
			cancelRequest: false,
			statistics: {
				off: 0,
				clean: 0,
				lost: 0,
				unkown: 0,
			}
		};
		this.items = [];
	}

	pars(value) {
		var lines = value.split(/\r\n|\r|\n/g);
		var filters = [
			"carrierName",
			"csncsn2eId",
			"lastRestoreDate",
			"firstActivationDate",
			"unlocked",
			"soldToName",
			"purchaseDate",
			"purchaseCountryDesc",
			"registrationDate",
			"caseDetails/"
		];
		var result = lines.filter((line) => {
			for(var i = 0; i < filters.length; i++) {
				if(line.startsWith(filters[i])){
					return true;
				}
			}
			return false;
		});
		var txt = ""
		for(var i = 0; i < result.length; i++) {
			txt = txt + result[i] + "\n"
		}
		return txt;
	}

	updateInputValue(event) {
		const val = event.target.value;
		this.setState({
			inputValue: val,
			parsed: this.pars(val)
		});
	}
	
	/**
	  enders the component
	  */
	render() {
		return <Container fluid className={this.props.className}>
			<Row className="align-middle">
				<h1>Detail Parser by Dr.Moe</h1>
			</Row>
			<Row>
				<Col xs={6}>
					<textarea
						class="form-control"
						id="w3review"
						name="w3review"
						onChange={event => this.updateInputValue(event)}
						value={this.state.inputValue}></textarea>
				</Col>
				<Col xs={6}>
					<textarea
						class="form-control"
						id="w3review"
						name="w3review"
						value={this.state.parsed}></textarea>
				</Col>
			</Row>
		</Container>;
	}
}

export default DetailParser;