'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

class LifeCycleLogger extends React.Component {
  render() {
    return <div>life cycle logger</div>
  }
}

class App extends React.Component {
  render() {
    return (
      <LifeCycleLogger />
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);