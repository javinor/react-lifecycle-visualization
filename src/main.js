'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

const start = Date.now()

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

class LifeCycleLogger extends React.Component {
  componentWillMount() {        
    console.log(`${Date.now() - start}: ${this.props.name} componentWillMount`) }
  componentDidMount() {         
    console.log(`${Date.now() - start}: ${this.props.name} componentDidMount`) }
  componentWillReceiveProps() { 
    console.log(`${Date.now() - start}: ${this.props.name} componentWillReceiveProps`) }
  componentWillUpdate() {       
    console.log(`${Date.now() - start}: ${this.props.name} componentWillUpdate`) }
  componentDidUpdate() {        
    console.log(`${Date.now() - start}: ${this.props.name} componentDidUpdate`) }
  componentWillUnmount() {      
    console.log(`${Date.now() - start}: ${this.props.name} componentWillUnmount`) }

  shouldComponentUpdate() {console.log(`${Date.now() - start}: ${this.props.name} shouldComponentUpdate`)
    return true
  }
  
  render() {
      console.log(`${Date.now() - start}: ${this.props.name} render`);
      const bgColor = getRandomColor()
      return (
          <div style={{backgroundColor: bgColor}}>
            {this.props.name}
            {this.props.children}
          </div>
      )
  }
}

class App extends React.Component {
  triggerRender() {
    this.setState({})
  }

  render() {
    return (
      <div>
        <button onClick={this.triggerRender.bind(this)}>App.setState({})</button>
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
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
