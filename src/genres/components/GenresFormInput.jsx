import React from 'react'

export const GenresFormInput = React.memo(({ onOptionChange, toSearchRadio }) => {
    return (
        <div className="col-md-2 genres-input">
            <div className="form-check">
                <input
                    type="radio"
                    id='anime'
                    name={toSearchRadio}
                    className='form-check-input'
                    value={"anime"}
                    onChange={(event) => { onOptionChange(event) }}
                    checked={toSearchRadio === "anime"}
                />
                <label className="form-check-label" htmlFor="anime">
                    Anime
                </label>
            </div>
            <div className="form-check">
                <input
                    type="radio"
                    id='manga'
                    name={toSearchRadio}
                    className='form-check-input'
                    value={"manga"}
                    checked={toSearchRadio === "manga"}
                    onChange={(event) => { onOptionChange(event) }}
                />
                <label className="form-check-label" htmlFor="manga">
                    Manga
                </label>
            </div>
        </div>
    )
})
