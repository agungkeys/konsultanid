import React, { Component } from "react";
import {Container} from "semantic-ui-react";
import PropTypes from "prop-types";

class LandingWelcomeHeader extends Component {
	constructor() {
		super();
		this.state = {}
	}
	render(){
		const {title} = this.props;
		return(
			<Container style={{height: '100%'}}>
				<div className="row">
					<div className="col-md-12">
						<div className="banner-headline">
							<h3>
								<strong>{title}</strong>
								<span>Thousands of small businesses use&nbsp;<strong className="color">Konsultan<span style={{color: 'red'}}>ID</span></strong>&nbsp;to turn their ideas into reality.</span>
							</h3>
						</div>
					</div>
				</div>
			</Container>
		)
	}
}

LandingWelcomeHeader.propTypes = {
	title: PropTypes.string.isRequired
};

LandingWelcomeHeader.defaultProps = {
	title: "Hire experts or be hired for any consultant, any time."
};

export default LandingWelcomeHeader;