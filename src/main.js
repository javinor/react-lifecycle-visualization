'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

class LifeCycleLogger extends React.Component {
  componentWillMount() {
    console.log(`${this.props.name} componentWillMount`)
  }
  // render
  componentDidMount() {
    console.log(`${this.props.name} componentDidMount`)
  }
  componentWillReceiveProps() {
    console.log(`${this.props.name} componentWillReceiveProps`)
  }
  shouldComponentUpdate() {
    console.log(`${this.props.name} shouldComponentUpdate`)
    return true
  }
  componentWillUpdate() {
    console.log(`${this.props.name} componentWillUpdate`)
  }
  // render
  componentDidUpdate() {
    console.log(`${this.props.name} componentDidUpdate`)
  }
  
  componentWillUnmount() {
    console.log(`${this.props.name} componentWillUnmount`)
  }

  render() {
      console.log(`${this.props.name} render`);
      return (
          <div>
            {this.props.name}
            {this.props.children}
          </div>
      )
  }
}

class App extends React.Component {
  render() {
    return (
      <LifeCycleLogger name="container">
        <LifeCycleLogger name="father">
          <LifeCycleLogger name="first" />
          <LifeCycleLogger name="second" />
          <LifeCycleLogger name="third" />
        </LifeCycleLogger>
        <LifeCycleLogger name="mother">
          <LifeCycleLogger name="a" />
          <LifeCycleLogger name="b" />
          <LifeCycleLogger name="c" />
        </LifeCycleLogger>
      </LifeCycleLogger>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);