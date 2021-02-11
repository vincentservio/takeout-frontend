import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTakeout} from './actions/takeout'
 class Form extends Component {
   state = {
     takeout: {
       name:"",
       score: "",
       comment: "", 
       best_order: ""

     },
     loading: false
   }

   handleChange = (event) => { 
    // debugger
     this.setState({
     
      [event.target.name]: event.target.value

    })
   }
   handleSubmit = (event) => {

      event.preventDefault()
      const takeout = {
        name: this.state.name,

      }
      debugger
      this.props.addTakeout(takeout)
      this.setState({name: "", loading:false})
   }
    render() {
        return (
       <form onSubmit={this.handleSubmit}>
            <label >
                Name:
                 <input type="text" value={this.state.name} onChange={this.handleChange}/>
            </label>

                 <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default connect(null, {addTakeout})(Form)