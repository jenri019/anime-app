import React from 'react'

export const GenresFormSelect = React.memo(({ onSearchInputChange, toSearchSelect }) => {
    return (
        <div className="col-md-4">
            <select
                className='form-control'
                name='toSearchSelect'
                value={toSearchSelect}
                onChange={(event) => { onSearchInputChange(event) }}
            >
                <option value="genres">Genres</option>
                <option value="explicit_genres">Explicit genres</option>
                <option value="themes">Themes</option>
                <option value="demographics">Demographics</option>
            </select>
        </div>
    )
})
