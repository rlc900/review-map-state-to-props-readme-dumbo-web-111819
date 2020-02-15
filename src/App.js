import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  // because we are taking a part of the store's state and porting it to become props of the relevant component, we say that we are mapping it as props to the component, thus the name mapStateToProps.
  // this return value is the value of props tat are added to the App component.
  return { items: state.items }
}

  // connect() function calls the mapStateToProps() function each time there is a change in state, and that mapStateToProps() receives state as its first argument.
  // connect() takes whatever the return value is of the mapStateToProps() function and passes it to the component that is in those last set of parentheses (in this case, App).
export default connect(mapStateToProps)(App);
