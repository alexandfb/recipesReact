import React, {Component} from 'react'
import IngredientListItem from './ingredientListItem/IngredientListItemContainer'

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
    this.props.updateIngredientList(ingredientList)
    this.props.setMaxIngredientValue(maxVal)
  }

  removeIngredientRow (row) {
    console.log(row)
    let ingredientList = this.props.selectedRecipe.ingredients
    ingredientList.splice(row, 1)
    console.log(ingredientList)
    this.props.updateIngredientList(ingredientList)
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

export default IngredientList
