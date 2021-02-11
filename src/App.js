import Form from './Form';
import './App.css';
import React, {Component} from 'react'
import  { connect } from  'react-redux'
import { getTakeouts } from './actions/takeout'
class App extends Component{

  componentDidMount(){
    this.props.getTakeouts()
  }
  render(){   
 
  const takeouts = this.props.takeouts.map((takeout, i) => <li key={i}>{takeout.name}</li>)
    return (
      <div className="App">
          <header className="App-header">
            <h1>hello</h1>

            <Form/>
            <ul>
              {this.props.loading ? <h3>Loading.....</h3> : takeouts}
              <br/>
            </ul>
          </header>
        </div>
    )
  } 
  
}

const mapStateToProps = state => {
  return {
    takeouts: state.takeoutReducer.takeout,
    loading: state.takeoutReducer.loading

  }
}
export default connect(mapStateToProps, getTakeouts )(App);
