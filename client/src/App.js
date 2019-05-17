import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./screens/components/navbar";
import Landing from "./screens/landing";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import PrivateRoute from "./screens/private-route/PrivateRoute";
import Dashboard from "./screens/dashboard/Dashboard";

import Wirewiki from "./screens/wirewiki";
import Wirefeed from "./screens/wirefeed";
import Wireguide from "./screens/wireguide";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
	componentWillMount() {
		// console.log(store.getState())
	}

	render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
						<Route exact path="/" component={Landing} />


            <Switch>

							<PrivateRoute exact path="/dashboard" component={Dashboard} />
							<PrivateRoute exact path="/wirewiki" component={Wirewiki} />
							<PrivateRoute exact path="/wirefeed" component={Wirefeed} />
							<PrivateRoute exact path="/wireguide" component={Wireguide} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
