import React from 'react';
import ReactDOM from 'react-dom';

// state'full' component
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default prop.txt value'
}

ReactDOM.render(<App cat={4} /*txt="this is the props value"*/ />, document.getElementById('app'));

// export default App
