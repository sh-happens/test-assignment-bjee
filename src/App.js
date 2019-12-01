import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "./helpers";
import { alertActions, userActions } from "./actions";
import { MainPage, Login } from "./pages";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    dispatch(alertActions.success("Hi!"));
    dispatch(userActions.logout());
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='col-sm-8 col-sm-offset-2'>
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
