import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';

export const SearchBar = ({placeholder}) => {

  const location = useLocation();
  const { querySearch = '' } = queryString.parse(location.search);

  const {formState, onInputChange} = useForm({
    toSearch: querySearch,
  })

  const {toSearch} = formState;

  const navigate = useNavigate();

  const onSearchInputChange = (event) => {
    if(event.target.value.trim().length >  1) return;
    onInputChange(event)
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(toSearch.trim().length == 0) return;
    navigate(`?querySearch=${toSearch}`);
  }

  return (
    <>
      <form className='d-flex' onSubmit={(event) => onSubmitForm(event)}>
        <div className="col-md-4">
          <input
              type="text"
              className='form-control'
              placeholder={placeholder}
              name='toSearch'
              value={toSearch}
              onChange={(event) => { onSearchInputChange(event) }}
              autoComplete='off'/>
        </div>
        <div className="col-md-2">
              <button className="btn btn-primary">
                Buscar
              </button>
        </div>
      </form>
    </>
  )
}