import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(InputValue.trim().length > 2){
            setCategories((cats)=> [InputValue, ...cats]);
            setInputValue(''); 
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                type='text'
                className='form__input'
                placeholder='Add category'
                value={InputValue}
                onChange={handleInputValueChange}
                aria-label='Add category of images'
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
