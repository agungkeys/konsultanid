import React, { Component } from "react";
import {Container, Form,} from "semantic-ui-react";
import PropTypes from "prop-types";

class InputIconLeft extends Component {
	constructor() {
		super(props);
		this.state = {}
	}
	render(){
		const {title} = this.props;
		return(
			<Container>
				<div className="input-with-icon-left">
					<i className="icon-material-baseline-mail-outline"></i>
					<input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
				</div>
			</Container>
		)
	}
}

InputIconLeft.propTypes = {
	title: PropTypes.string.isRequired
};

InputIconLeft.defaultProps = {
	title: "Hire experts or be hired for any consultant, any time."
};

export default InputIconLeft;