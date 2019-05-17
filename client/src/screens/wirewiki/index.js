import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import {Container, Header, Segment, Tab, Grid, Divider, Image, Search} from "semantic-ui-react";
import style from "./style";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const source = _.times(100, () => ({
	title: faker.company.companyName(),
	description: faker.company.catchPhrase(),
	image: faker.internet.avatar(),
	price: faker.finance.amount(0, 100, 2, '$'),
}));

const TabAllProduct = () => (
	<Segment className='allproduct'>
		<Grid columns={2} relaxed='very'>
			<Grid.Column style={{background: '#f7f7f7'}}>
				<div>
					<Image src='../report.svg' size="small" floated='left'  />
					<div style={{paddingTop: '1em'}}>
						<Header as='h2' style={{display: 'flex'}}>
							<Header.Content>
								Digital Transaction Banking
								<Header.Subheader>Digital Transaction Banking is a collection of main products document in our company.This section list is essential knowledge for our members at PT Wirecard Technologies Indonesia.</Header.Subheader>
							</Header.Content>
						</Header>
					</div>
				</div>
			</Grid.Column>
			<Grid.Column style={{background: '#f7f7f7'}}>
				<div>
					<Image src='../marketing-strategy.svg' size="small" floated='left'  />
					<div style={{paddingTop: '1em'}}>
						<Header as='h2' style={{display: 'flex'}}>
							<Header.Content>
								Internal Product
								<Header.Subheader>Internal Product is a collection of the internal document in our company. This section list is essential knowledge for our members at PT Wirecard Technologies Indonesia.</Header.Subheader>
							</Header.Content>
						</Header>
					</div>
				</div>
			</Grid.Column>
		</Grid>
		<Divider vertical>And</Divider>
	</Segment>
);

const TabTransactionBanking = () => (
	<Segment className='allproduct-dtb'>
		<Grid relaxed='very'>
			<Grid.Row style={{marginTop: '-1em', marginBottom: '-1em'}}>
				<Grid.Column width={6} style={{background: '#f7f7f7'}}>
					<Image src='../report.svg' size="small" floated='left' />
					<Header as='h2'>
						<Header.Content>
							Digital Transaction Banking
							<Header.Subheader>Digital Transaction Banking is a collection of main products document in our company.This section list is essential knowledge for our members at PT Wirecard Technologies Indonesia.</Header.Subheader>
						</Header.Content>
					</Header>
				</Grid.Column>
				<Grid.Column width={10} style={{background: '#f7f7f7'}}>
					<Grid columns='two' divided>
						<Grid.Row>
							<Grid.Column>
								<Image src='../images/primecorp.png' size='tiny' floated='left' />
								<div style={{paddingTop: '1em'}}>
									<Header as='h3' style={{display: 'flex'}}>
										<Header.Content>
											Primacash Corporation
											<Header.Subheader>Internal Product is a collection of the internal document in our company.</Header.Subheader>
										</Header.Content>
									</Header>
								</div>
							</Grid.Column>
							<Grid.Column>
								<Image src='../images/primemobile.png' size='tiny' floated='left' />
								<div style={{paddingTop: '1em'}}>
									<Header as='h3' style={{display: 'flex'}}>
										<Header.Content>
											Prime Mobile
											<Header.Subheader>Internal Product is a collection of the internal document in our company.</Header.Subheader>
										</Header.Content>
									</Header>
								</div>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<Image src='../images/prismagateway.png' size='tiny' floated='left' />
								<div style={{paddingTop: '1em'}}>
									<Header as='h3' style={{display: 'flex'}}>
										<Header.Content>
											Prisma Gateway
											<Header.Subheader>Internal Product is a collection of the internal document in our company.</Header.Subheader>
										</Header.Content>
									</Header>
								</div>
							</Grid.Column>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Segment>
);

const TabInternalProducts = () => (
	<Segment className='allproduct-ip'>
		<Grid relaxed='very'>
			<Grid.Row style={{marginTop: '-1em', marginBottom: '-1em'}}>
				<Grid.Column width={6} style={{background: '#f7f7f7'}}>
					<Image src='../marketing-strategy.svg' size="small" floated='left' rounded />
					<Header as='h2'>
						<Header.Content>
							Internal Product
							<Header.Subheader>Internal Product is a collection of the internal document in our company. This section list is essential knowledge for our members at PT Wirecard Technologies Indonesia.</Header.Subheader>
						</Header.Content>
					</Header>
				</Grid.Column>
				<Grid.Column width={10} style={{background: '#f7f7f7'}}>
					<Grid columns='two' divided>
						<Grid.Row>
							<Grid.Column>
								<Image src='../images/katalis.png' size='tiny' floated='left' />
								<div style={{paddingTop: '1em'}}>
									<Header as='h3' style={{display: 'flex'}}>
										<Header.Content>
											Katalis
											<Header.Subheader>Internal Product is a collection of the internal document in our company.</Header.Subheader>
										</Header.Content>
									</Header>
								</div>
							</Grid.Column>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
							<Grid.Column>
								<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Segment>
);

const panes = [
	{ menuItem: 'ALL PRODUCTS', render: () => <Tab.Pane style={style.panesStyle} attached={false}><TabAllProduct/></Tab.Pane> },
	{ menuItem: 'DIGITAL TRANSACTION BANKING', render: () => <Tab.Pane style={style.panesStyle} attached={false}><TabTransactionBanking/></Tab.Pane> },
	{ menuItem: 'INTERNAL PRODUCTS', render: () => <Tab.Pane style={style.panesStyle} attached={false}><TabInternalProducts/></Tab.Pane> },
];

class WirewikiDashboard extends Component {
	componentWillMount() {
		this.resetComponent()
	}

	resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

	handleResultSelect = (e, { result }) => this.setState({ value: result.title });

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });
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
		const { isLoading, value, results } = this.state;
		return (
			<div style={{ marginTop: '6em' }}>
				<Header as='h1' style={{fontSize: '3em', fontWeight: '70', paddingTop: '1em'}} content='Product Index' textAlign='center' />
				<Container text>
					<b>Hey there,</b> {user.name.split(" ")[0]}
					<Search
						fluid
						placeholder="Search Product Document . . ."
						className="searchdocument"
						input={{ icon: 'search', iconPosition: 'left'}}
						loading={isLoading}
						onResultSelect={this.handleResultSelect}
						onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
						results={results}
						value={value}
					/>
				</Container>
				<Container fluid>
					<Tab className='parent-tab' style={{paddingTop: '3em'}} menu={{ borderless: false, secondary: true, pointing: true }} panes={panes} />
				</Container>
			</div>
		);
	}
}

WirewikiDashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(WirewikiDashboard);
