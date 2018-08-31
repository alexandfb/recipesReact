import React, { Component } from 'react'
import SearchBar from '../menuBar/SearchBarContainer'
import InsertRecipeButton from '../menuBar/InsertRecipeButton'

class Header extends Component {
  render () {
    return (
      <div className='col-md-12 col-sm-12 row mt-5 d-print-none'>
        <SearchBar />
        <InsertRecipeButton />
      </div>
    )
  }
}

export default Header
