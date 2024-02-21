import React, { useCallback, useContext, useState } from 'react'
import { useForm } from '../../common/hooks/useForm'
import { GenresOptions } from './GenresOptions';
import { GenresContext } from '../context';
import { GenresFormSelect } from './GenresFormSelect';
import { GenresFormInput } from './GenresFormInput';

export const Search = () => {
    const { genre, type, changeType, changeGenre, changeFilter } = useContext(GenresContext);

    const { formState, onInputChange } = useForm({
        toSearchSelect: genre,
    })

    const { toSearchSelect } = formState;

    const onSearchInputChange = useCallback(
        (event) => {
            changeFilter(0);
            changeGenre(event.target.value);
            onInputChange(event);
        },
        [],
    )

    const [toSearchRadio, setToSearchRadio] = useState(type)

    const onOptionChange = useCallback(
        (event) => {
            changeFilter(0);
            changeType(event.target.value);
            setToSearchRadio(event.target.value)
        },
        [],
    )

    return (
        <>
            <form>
                <div className="row">
                    <GenresFormSelect
                        onSearchInputChange={onSearchInputChange}
                        toSearchSelect={toSearchSelect}
                    />
                    <GenresFormInput
                        onOptionChange={onOptionChange}
                        toSearchRadio={toSearchRadio}
                    />
                </div>
            </form>
            <hr />
            <GenresOptions selectedListOption={toSearchSelect} selectedTypeOption={toSearchRadio} />
            <hr />
        </>
    )
}
