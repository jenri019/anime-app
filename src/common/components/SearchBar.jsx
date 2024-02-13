import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const SearchBar = ({placeholder, type = ''}) => {
  const navigate = useNavigate();

  const {formState, onInputChange} = useForm({
    toSearch: '',
  })

  const {toSearch} = formState;

  const onSubmitForm = (event) => {
    event.preventDefault();
    navigate(`?${type}=${toSearch}`);
  }

  return (
    <>
      <form className='d-flex' onSubmit={(event) => onSubmitForm(event)}>

          <input
              type="text"
              className='form-control'
              placeholder={placeholder}
              name='toSearch'
              value={toSearch}
              onChange={(event) => { onInputChange(event) }}
              autoComplete='off'/>
              
          <button className="btn btn-primary">
            Buscar
          </button>
      </form>
    </>
  )
}