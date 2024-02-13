import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { CommonContext } from '../context/CommonContext';

export const SearchBar = ({placeholder}) => {
  const navigate = useNavigate();

  const { destinyRoute } = useContext(CommonContext)

  const {formState, onInputChange} = useForm({
    toSearch: '',
  })

  const {toSearch} = formState;

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(toSearch.trim().length == 0) return;
    navigate(`${destinyRoute}?querySearch=${toSearch}`);
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