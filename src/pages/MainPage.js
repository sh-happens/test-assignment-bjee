import React, { Component } from "react";

import { cardsActions } from "./../actions";

import { connect } from "react-redux";

class MainPage extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch(cardsActions.getCards(1));
  }

  render() {
    return (
      <div className='App'>
        <h1>hello</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cards } = state.cardsReducer;
  return cards;
}

const connectedComponent = connect(mapStateToProps, null)(MainPage);

export { connectedComponent as MainPage };
