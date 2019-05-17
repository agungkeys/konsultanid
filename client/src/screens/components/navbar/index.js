import React, { Component } from "react";
import {Menu, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

class Navbar extends Component {
	state = {
		activeItem: 'home',
		imageLogo: './wirecard-logo.svg',
		defaultValue: 'wirecard'
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
		this.setState({
			imageLogo: './wirecard-logo.svg',
			defaultValue: 'wirecard'
		});
	};


	componentDidMount() {
		// this.handleUrlLogo()
	}


	render() {
		const { activeItem, imageLogo } = this.state;
		const { user } = this.props.auth;

		const trigger = (
			<Image src={imageLogo} size='medium' style={{margin: '-15px'}} />
		);

		const loginStatus = Object.entries(user).length !== 0 || user.constructor !== Object ? true : false;
		let menuLogin, menuRegister;
		if(loginStatus === false){
			menuLogin = <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={Link} to="/login" />
			menuRegister = <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick} as={Link} to="/register" />
		}else{
			menuLogin = <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.onLogoutClick} />
		}

		return (
			<header id="header-container" className="fullwidth">
				<div id="header">
					<div className="container">
						<div className="left-side">
							<div id="logo">
								<a>
									<img src="./dist/images/logo-konsultan.png" alt=""/>
								</a>
							</div>
							<nav id="navigation">
								<ul id="responsive">
									<li>
										<Link id="home" to="/" className="margin-top-3">Beranda</Link>
									</li>
									<li>
										<a id="about" href="/about" className="margin-top-3">Tentang</a>
									</li>
									<li><a href="/">Cari Proyek</a>
										<ul className="dropdown-nav">
											<li><a href="#">Menu 1</a></li>
											<li><a href="#">Menu 2</a></li>
											<li><a href="#">Menu 3</a></li>
										</ul>
									</li>
									<li><a id="" href="/" className="margin-top-3">Cari Konsultan</a></li>
									<li><a id="faq" href="/faq" className="margin-top-3">Panduan</a></li>
									<li><a id="contact" href="/contact" className="margin-top-3">Kontak</a></li>
								</ul>
							</nav>
							<div className="clearfix"/>
						</div>
						<div className="right-side">
							<div className="header-widget">
								<Link to="/login" className="margin-top-3 log-in-button">
									<i className="icon-feather-log-in"/><span>Masuk / Daftar</span>
								</Link>
							</div>
							<span className="mmenu-trigger">
								<button className="hamburger hamburger--collapse" type="button">
									<span className="hamburger-box">
										<span className="hamburger-inner"/>
									</span>
								</button>
							</span>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Navbar);

