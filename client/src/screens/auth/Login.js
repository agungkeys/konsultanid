import React, { Component } from "react";
import { Container, Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumbBigTitle";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    const datas = [{
    	title: 'Home',
			url: '/'
		},{
    	title: 'Log In',
			url: null
		}];
    return (
      <div id='wrapper'>
				<Navbar/>
				<Breadcrumb title='Login' dataBreadcrumb={datas}/>
				<Container>
					<div className="row">
						<div className="col-md-12">
							<div className="login-register-page">
								<div className="welcome-text">
									<h3>Kami senang bertemu Anda kembali!</h3>
									<span>Belum punya akun? <Link to='/register'>Daftar!</Link></span>
								</div>
							</div>
						</div>
					</div>
				</Container>
				<div className='login-form' style={{paddingBottom: '2em'}}>
					<Grid textAlign='center'>
						<Grid.Column style={{ maxWidth: 450 }}>
							<Form size='large' noValidate onSubmit={this.onSubmit}>
								<Container className="col-md-12">
									<Form.Input
										fluid
										icon='user'
										iconPosition='left'
										placeholder='E-mail address'
										onChange={this.onChange}
										value={this.state.email}
										error={errors.email}
										id='email'
										type='email'
										className={classnames('', {
											invalid: errors.email || errors.emailnotfound
										})}
									/>
									<span className="red-text">
										{errors.email}
										{errors.emailnotfound}
									</span>
									<Form.Input
										fluid
										icon='lock'
										iconPosition='left'
										placeholder='Password'
										onChange={this.onChange}
										value={this.state.password}
										error={errors.password}
										id='password'
										type='password'
										className={classnames('', {
											invalid: errors.password || errors.passwordincorrect
										})}
									/>
									<span className="red-text">
                  	{errors.password}
                  	{errors.passwordincorrect}
									</span>
									<Button className='button full-width button-sliding-icon ripple-effect margin-top-10' fluid size='large' type='submit'>
										Login <i className="icon-material-outline-arrow-right-alt"/>
									</Button>
								</Container>
							</Form>
						</Grid.Column>
					</Grid>
					{/*<Grid textAlign='center'>*/}
						{/*<Grid.Column style={{ maxWidth: 450 }}>*/}
							{/*<div>*/}
								{/*Baru? <Link to="/register">Sign Up</Link>*/}
							{/*</div>*/}
						{/*</Grid.Column>*/}
					{/*</Grid>*/}
				</div>
				<Footer/>
			</div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
