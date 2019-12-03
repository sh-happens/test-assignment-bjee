import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { history, getCardById } from "./helpers";
import { alertActions, userActions } from "./actions";
import { MainPage, Login } from "./pages";
import { CardView, Header } from "./components";

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
    const { alert, cards } = this.props;
    return (
      <div>
        <div>
          <div>
            {alert.message && <div>{alert.message}</div>}
            <Router history={history}>
              <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/login' component={Login} />
                <Route
                  path='/card/:id'
                  render={props => {
                    return [
                      <Header />,
                      <CardView
                        card={getCardById(
                          cards,
                          parseInt(props.match.params.id)
                        )}
                      />
                    ];
                  }}
                />
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
  const { cards } = state.cardsReducer;
  return {
    alert,
    cards
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
