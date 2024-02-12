import React from 'react'

export const SearchBar = ({placeholder}) => {

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log('SUBMIT')
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
