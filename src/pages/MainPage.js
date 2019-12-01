import React, { Component } from "react";

import { cardsActions, userActions } from "./../actions";
import { Header } from "./../components";
import { connect } from "react-redux";

class MainPage extends Component {
  state = {
    sortField: "username",
    queryDirection: "asc"
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(cardsActions.getCards(1, "username"));
    dispatch(userActions.login("admin", "123"));
  }

  handleNextClick = () => {
    this.props.dispatch(cardsActions.getCards(this.props.pageNumber + 1));
  };

  handlePreviousClick = () => {
    this.props.dispatch(cardsActions.getCards(this.props.pageNumber - 1));
  };

  handleSortField = event => {
    this.setState({
      sortField: event.target.value
    });
    this.props.dispatch(
      cardsActions.getCards(this.props.pageNumber, event.target.value)
    );
  };

  handleQueryDirection = event => {
    this.setState({
      queryDirection: event.target.value
    });
    this.props.dispatch(
      cardsActions.getCards(
        this.props.pageNumber,
        this.state.sortField,
        event.target.value
      )
    );
  };

  handlePageChange = event => {
    this.props.dispatch(
      cardsActions.getCards(
        parseInt(event.target.value),
        this.state.sortField,
        this.state.queryDirection
      )
    );
  };

  createPagesArray = totalTaskCount => {
    const totalPagesCount = totalTaskCount / 3;
    return [...Array(Math.ceil(totalPagesCount)).keys()];
  };

  render() {
    const { username } = this.props;
    return (
      <div>
        <div className='App container'>
          <Header username={username} />
        </div>
        <h1>hello</h1>
        <select value={this.state.sortField} onChange={this.handleSortField}>
          <option value='username'>username</option>
          <option value='email'>email</option>
          <option value='status'>status</option>
        </select>
        <select
          value={this.state.queryDirection}
          onChange={this.handleQueryDirection}
        >
          <option value='asc'>Asc</option>
          <option value='desc'>Desc</option>
        </select>
        <ul>
          {this.props.cards.map(card => {
            return (
              <li key={card.id}>
                <span style={{ paddingRight: 10 }}>{card.username}</span>
                <span style={{ paddingRight: 10 }}>{card.email}</span>
                <span style={{ paddingRight: 10 }}>{card.text}</span>
                <span style={{ paddingRight: 10 }}>{card.status}</span>
              </li>
            );
          })}
        </ul>
        <button onClick={this.handlePreviousClick}>previous</button>
        <select value={this.props.pageNumber} onChange={this.handlePageChange}>
          {this.createPagesArray(this.props.totalTaskCount).map(page => {
            return <option value={page}>{page}</option>;
          })}
        </select>
        <button onClick={this.handleNextClick}>next</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cards, pageNumber, totalTaskCount } = state.cardsReducer;
  return { cards, pageNumber, totalTaskCount };
}

const connectedComponent = connect(mapStateToProps, null)(MainPage);

export { connectedComponent as MainPage };
