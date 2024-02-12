import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({placeholder, type = ''}) => {
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log('SUBMIT')
    navigate(`?${type}=1`);
  }

  return (
    <>
    <form className='d-flex' onSubmit={(event) => onSubmitForm(event)}>
        <input
            type="text"
            className='form-control'
            placeholder={placeholder}
        />
        <button className="btn btn-primary">
          Buscar
        </button>
    </form>
    </>
  )
}