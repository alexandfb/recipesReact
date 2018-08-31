import React, {Component} from 'react'

class IngredientListItem extends Component {
  updateField (newValue, field, ingredientItem) {
    Object.defineProperty(ingredientItem, field, { value: newValue })
    this.props.updateIngredientItem(ingredientItem)
  }

  render () {
    if (!this.props.ingredientItemId) {
      return <div> No Ingredient Found</div>
    }

    if (!this.props.selectedRecipe) {
      return <div> No Recipe Found</div>
    }

    const ingredientId = this.props.ingredientItemId
    let ingredientItem = this.props.selectedRecipe.ingredients.find(item => item.id === ingredientId)

    const options = ['at Will', 'Cups', 'Grams', 'Unit', 'Package', 'Tsp', 'Tbsp'].map(function (value) {
      return <option key={value} value={value}>{value}</option>
    })

    options.unshift(
      <option key='other' disabled> -- Select Unit -- </option>
    )

    return (
      <div className='form-group row' id={ingredientItem.id}>
        <div className='offset-sm-2 col-sm-4'>
          <input type='text' className='form-control' onChange={(e) => this.updateField(e.target.value, 'name', ingredientItem)} id='inputIngredientName' placeholder='Name' value={ingredientItem.name} />
        </div>
        <div className='col-sm-2'>
          <input type='text' className='form-control' onChange={(e) => this.updateField(e.target.value, 'amount', ingredientItem)} id='inputIngredientAmount' placeholder='0' value={ingredientItem.amount} />
        </div>
        <div className='col-sm-3'>
          <select className='form-control' onChange={(e) => this.updateField(e.target.value, 'unit', ingredientItem)} defaultValue={ingredientItem.unit || ''} >{options}</select>
        </div>
        <button type='button' onClick={(e) => this.props.onRowRemoval(this.props.index)} className='close' aria-label='Close'>
          <span aria-hidden='true' className='text-danger'>&times;</span>
        </button>
      </div>
    )
  }
}

export default IngredientListItem
