import { connect } from 'react-redux';
import { decreaseCounter, increaseCounter } from './action/actions';
import './App.css';
import logo from './logo.svg';
import store from './redux/store';

function App(props) {
  // event handler
  const handleIncrease = () => {
    // dispatch actions
    props.increaseCounter1();

    // fire actions: dispatch = fire
    // store.dispatch({
    //   type: 'lppd',
    //   payload: { favLang: 'js' },
    // });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>Count: {props.count}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter1: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
