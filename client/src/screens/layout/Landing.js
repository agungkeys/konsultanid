import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import {Container, Header, Grid, Segment, Image} from "semantic-ui-react";
// import style from "./style";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import styled from "styled-components";

const source = _.times(100, () => ({
	title: faker.company.companyName(),
	description: faker.company.catchPhrase(),
	image: faker.internet.avatar(),
	price: faker.finance.amount(0, 100, 2, '$'),
}));

const BodyLanding = styled.div`
	background-image: url('./background.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top;
`;

class Landing extends Component {

	componentWillMount() {
		this.resetComponent()
	}

	resetComponent = () =>
		this.setState({ isLoading: false, results: [], value: '' });

	handleResultSelect = (e, { result }) => this.setState({ value: result.title });

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value })

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent()

			const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
			const isMatch = result => re.test(result.title)

			this.setState({
				isLoading: false,
				results: _.filter(source, isMatch),
			})
		}, 300)
	};

  render() {
		const { user } = this.props.auth;
		// const { isLoading, value, results } = this.state;
    return (
			<BodyLanding className='bodyLanding'>
				<Container>
					<Header as='h3' style={{fontSize: '2em', fontWeight: '70', paddingTop: '2em'}} content='Discovery your most important important docs that are buired in the cloud' textAlign='center' />
					<div style={{textAlign: 'center'}}><b style={{fontSize: '1em'}}>Your vital documents are scattered. Do you know where your docs are?</b></div>
					<div style={{textAlign: 'center'}}><b>Hey there,</b> {user.name !== undefined ? user.name.split(" ")[0] : "Guest"} </div>
				</Container>
				<Grid container columns={3} doubling style={{paddingTop: '3em', height: '500px'}}>
					<Grid.Column>
						<div>
							<Image src='./images/wirewiki-landing.png' size='medium' centered/>
						</div>
					</Grid.Column>
					<Grid.Column>
						<div>
							<Image src='./images/wirefeed-landing.png' size='medium' centered/>
						</div>
					</Grid.Column>
					<Grid.Column>
						<div>
							<Image src='./images/wirewiki-landing.png' size='medium' centered/>
						</div>
					</Grid.Column>
				</Grid>
			</BodyLanding>
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
