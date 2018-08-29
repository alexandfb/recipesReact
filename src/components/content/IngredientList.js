import React, {Component} from 'react'
import IngredientListItem from './IngredientListItem'
import { connect } from 'react-redux'
import { updateIngredientList, setMaxIngredientValue } from '../../actions/recipes'
import { withRouter } from 'react-router'

class IngredientList extends Component {
  constructor (props) {
    super(props)
    this.addNewIngredientRow = this.addNewIngredientRow.bind(this)
    this.removeIngredientRow = this.removeIngredientRow.bind(this)
  }

  addNewIngredientRow () {
    let ingredientList = this.props.selectedRecipe.ingredients
    const maxVal = this.props.maxIngredientId + 1
    ingredientList.push({id: maxVal, 'amount': '', 'name': '', 'unit': ''})
    this.props.updateIngredientList(this.props.selectedRecipe, ingredientList)
    this.props.setMaxIngredientValue(maxVal)
  }

  removeIngredientRow (row) {
    console.log(row)
    let ingredientList = this.props.selectedRecipe.ingredients
    ingredientList.splice(row, 1)
    console.log(ingredientList)
    this.props.updateIngredientList(this.props.selectedRecipe, ingredientList)
  }

  render () {
    let ingredientList = null
    let ingredientListMap = null
    if (this.props.selectedRecipe !== null) {
      ingredientList = this.props.selectedRecipe.ingredients
    }
    if (ingredientList) {
      ingredientListMap = ingredientList.map((obj, index) => (
        <IngredientListItem key={obj.id} ingredientItemId={obj.id} index={index} onRowRemoval={this.removeIngredientRow} />
      ))
    }

    return (
      <div>
        <div className='row'>
          <h2 className='col-md-4 offset-md-4'> Ingredients</h2>
          <div className='col-md-4'>
            <button type='button' onClick={this.addNewIngredientRow} className='btn btn-outline-success'>Add Ingredient</button>
          </div>
        </div>
        {ingredientListMap}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe,
    maxIngredientId: state.recipes.maxIngredientId
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateIngredientList: (selectedRecipe, newIngredientlist) => { dispatch(updateIngredientList(selectedRecipe, newIngredientlist)) },
    setMaxIngredientValue: (newValue) => { dispatch(setMaxIngredientValue(newValue)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IngredientList))
