import React, { Component } from "react";
// import {Container, Header, Grid, Segment, Image} from "semantic-ui-react";
// import style from "./style";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LandingWelcomeHeader from "../components/landingWelcomeHeader";
import LandingWelcomeSearch from "../components/landingWelcomeSearch";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import styled from "styled-components";

const BodyLanding = styled.div`

`;

class Landing extends Component {

	componentWillMount() {

	}



	render() {
		// const { user } = this.props.auth;
		// const { isLoading, value, results } = this.state;
		return (
			<div id='wrapper'>
				<Navbar/>
				<BodyLanding className="intro-banner" data-background-image="./dist/images/home-background.jpg">
					<div className="container">
						<LandingWelcomeHeader/>
						<LandingWelcomeSearch/>
					</div>
				</BodyLanding>
				<Footer/>
			</div>
		);
	}
}

Landing.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Landing);
