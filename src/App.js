import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "./helpers";
import { alertActions, userActions } from "./actions";
import { MainPage } from "./pages";

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
              <div>
                <Route exact path='/' component={MainPage} />
              </div>
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
