import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {
  componentDidMount () {
    this.delayedCallback = _.debounce(function (event) {
      this.props.getRecipes(event.target.value)
    }, 300)
  }

  onInputChange (event) {
    event.persist()
    this.delayedCallback(event)
  }

  render () {
    return (
      <div className='col-md-10 input-group'>
        <input id='search-bar' type='text' className='form-control' onChange={event => this.onInputChange(event)} placeholder='Search...' />
        <div className='input-group-append'>
          <Link to='/search/' className='btn btn-outline-primary search-button'>Search</Link>
        </div>
      </div>
    )
  }
}

export default SearchBar
