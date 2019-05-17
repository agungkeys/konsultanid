import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Footer extends Component {
	constructor() {
		super();
		this.state = {}
	}

	render(){
		const RenderListBreadcrumb = ({data}) => {
			const listItems = data.map((dt, i) =>
				dt.url ? <li key={i}><Link to={dt.url}>{dt.title}</Link></li> : <li key={i}>{dt.title}</li>
			);
			return(
				<ul>{listItems}</ul>
			)
		};

		const {title, dataBreadcrumb} = this.props;

		return(
			<div id="titlebar" className="gradient">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>{title}</h2>
							<nav id="breadcrumbs" className="dark">
								<RenderListBreadcrumb data={dataBreadcrumb}/>
							</nav>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Footer.propTypes = {
	title: PropTypes.string.isRequired,
	dataBreadcrumb: PropTypes.array
};

Footer.defaultProps = {
	title: "Default",
	dataBreadcrumb: []
};

export default Footer;