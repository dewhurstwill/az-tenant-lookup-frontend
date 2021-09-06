import { useState } from 'react'

export const useForm = ( initialState = '' ) => {
    const [formValues, setformValues] = useState(initialState);
    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [ target.name ]: target.value
        });
    }

    const resetForm = () => {
        setformValues(initialState);
    }

    return [ formValues, handleInputChange, resetForm ];

}
