import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { CommonContext } from '../context/CommonContext';

export const SearchBar = ({placeholder}) => {
  const navigate = useNavigate();

  const { destinyRoute, searchTerm, setSearchTerm } = useContext(CommonContext)

  const {formState, onInputChange} = useForm({
    toSearch: searchTerm,
  })

  const {toSearch} = formState;

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(toSearch.trim().length == 0) return;
    setSearchTerm(toSearch);
    navigate(`${destinyRoute}?querySearch=${toSearch}`);
  }

  const onSearchInputChange = (event) => {
    if(event.target.value.trim().length >  1) return;
    onInputChange(event)
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
              onChange={(event) => { onSearchInputChange(event) }}
              autoComplete='off'/>
              
          <button className="btn btn-primary">
            Buscar
          </button>
      </form>
    </>
  )
}