import React, { Component } from "react";
import debounce from "lodash.debounce";
import {Container, Header, Grid, Segment, Image, Search} from "semantic-ui-react";
import PropTypes from "prop-types";
const google=window.google;
const autocompleteService = new google.maps.places.AutocompleteService();

class LandingWelcomeHeader extends Component {
	constructor() {
		super();
		this.state = {}
	}

	componentWillMount() {
		this.resetComponent();
	}

	resetComponent = () =>
		this.setState({ isLoading: false, results: [], value: "" });

	handleResultSelect = (e, { result }) =>{
		this.setState({ value: result.title, selectedPlace: result });
	}



	handleSearchChange = (e, { value }) => {

		if (value.length === 0) {
			return this.resetComponent();
		}

		var options = {
			types: ['(cities)'],
			componentRestrictions: {country: "id"}
		};

		this.setState({ isLoading: true, value });
		autocompleteService.getPlacePredictions(
			{ input: value, ...options},
			this.handleAutocompleteResult
		);
	};



	handleAutocompleteResult = (predictions, status) => {
		const initAllIndonesia = {
			description: "All Indonesia",
			id: "0",
			matched_substrings: [],
			place_id: "0",
			reference: "0",
			structured_formatting: {
				main_text: "All",
				main_text_matched_substrings: [],
				secondary_text: "All Indonesia"
			},
			terms: [],
			types: ["locality", "political", "geocode"]
		};

		if (status === google.maps.places.PlacesServiceStatus.OK) {
			// predictions.unshift(datax);
			// console.log(predictions)
			this.setState({
				isLoading: false,
				results: predictions.map(prediction => {
					return  {
						key: prediction.id,
						title: prediction.structured_formatting.main_text,
						description: prediction.structured_formatting.secondary_text,
						source: prediction
					}
				}, predictions.unshift(initAllIndonesia))
			});

		}
	};

	render(){
		const {labelwhere, labelsearch, labelbutton} = this.props;
		const { isLoading, value, results, selectedPlace } = this.state;
		return(
			<Container>
				<div className="row">
					<div className="col-md-12">
						<div className="intro-banner-search-form margin-top-95">
							<div className="intro-search-field with-autocomplete">
								<label htmlFor="autocomplete-input" className="field-title ripple-effect">{labelwhere}</label>
								<div className="input-with-icon">
									{/*<input id="autocomplete-input" type="text" placeholder="Surabaya"/>*/}
									<Search
										className='searchLocation'

										icon=""
										input="test"
										loading={isLoading}
										onResultSelect={this.handleResultSelect}
										onSearchChange={debounce(this.handleSearchChange, 500, {
											leading: true
										})}
										results={results}
										value={value}
										{...this.props}
									/>
									<i className="icon-material-outline-location-on"/>
								</div>
							</div>
							<div className="intro-search-field">
								<label htmlFor="intro-keywords" className="field-title ripple-effect">{labelsearch}</label>
								<input id="intro-keywords" type="text" placeholder="Project Title or Keywords"/>
							</div>
							<div className="intro-search-button">
								<button className="button ripple-effect">{labelbutton}</button>
							</div>
						</div>
					</div>
				</div>
				<Grid>
					<Grid.Column width={8}>
						<Header>State</Header>
						{/*<pre>{JSON.stringify(this.state, null, 2)}</pre>*/}
						<Header>Selected Place</Header>
						<pre>{JSON.stringify(this.state.selectedPlace, null, 2)}</pre>
					</Grid.Column>
					<Grid.Column width={8}>
					</Grid.Column>
				</Grid>
			</Container>
		)
	}
}

LandingWelcomeHeader.propTypes = {
	labelwhere: PropTypes.string,
	labelsearch: PropTypes.string,
	labelbutton: PropTypes.string
};

LandingWelcomeHeader.defaultProps = {
	labelwhere: "Where?",
	labelsearch: "What project you want?",
	labelbutton: "Search"
};

export default LandingWelcomeHeader;