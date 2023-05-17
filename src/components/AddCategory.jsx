import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

  const [valueInput, setValueInput] = useState('')

  const onCHangeInput = (event) => {
    setValueInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(valueInput.trim().length <= 1)return;
    // setCategories((categories) => [valueInput, ...categories]);
    onNewCategory(valueInput.trim())
    setValueInput('');
  }


  return (

    <form action="" onSubmit={ handleSubmit } aria-label="form">
      <input
        type="text"
        placeholder="gifs"
        value={valueInput}
        onChange={ onCHangeInput }
      />
    </form>

  )
}

AddCategory.prototype = {
  onNewCategory: PropTypes.func.isRequired,
}


