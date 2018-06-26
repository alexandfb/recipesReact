import React, { Component } from 'react'
import MenuBar from './menuBar'
import CookbookPanel from './cookbookPanel'
import RecipesApi from '../recipesApi';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);    
    this.state = { recipes: RecipesApi.search(null) }
    
  }

  recipeSearch(term){
    this.setState({
      recipes: RecipesApi.search(term)}
    );
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <MenuBar onSearchTermChange={term=> this.recipeSearch(term)} />                
        </div>
        <div className="row">
          <CookbookPanel recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default App
