import React, { Fragment } from 'react'
import { BRANDS, PLANS, YEARS } from '../constants'
import useQuoter from '../hooks/useQuoter'
import Error from './Error';

const Form = () => {

    const { data, handleChangeData, error, setError, quouteSecure } = useQuoter();
    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(data).includes("")) {
            setError("Todos los campos son obligatorios");
            return;
        }
        setError('');
        quouteSecure();
    }

    return (
        <>
            {error && <Error />}
            <form onSubmit={handleSubmit}>
                <div className='my-5'>
                    <label htmlFor="brand" className='block mb-3 font-bold text-gray-600 uppercase'>
                        Marca
                    </label>
                    <select
                        name="brand"
                        id='brand'
                        className='w-full p-3 bg-white border border-gray-400 rounded-xl'
                        onChange={e => handleChangeData(e)}
                        value={data.name}
                    >
                        <option value="">--- Selecciona Marca ---</option>
                        {BRANDS.map(brand =>
                            <option key={brand.id} value={brand.id}> {brand.name}</option>
                        )}
                    </select>
                </div>
                <div className='my-5'>
                    <label htmlFor="year" className='block mb-3 font-bold text-gray-600 uppercase'>
                        Año
                    </label>
                    <select
                        name="year"
                        id="year"
                        className='w-full p-3 bg-white border border-gray-400 rounded-xl'
                        onChange={e => handleChangeData(e)}
                        value={data.year}
                    >
                        <option value="">--- Selecciona Año ---</option>
                        {YEARS.map(year =>
                            <option key={year} value={year}> {year}</option>
                        )}
                    </select>
                </div>
                <div className='my-5'>
                    <label htmlFor="plan" className='block mb-3 font-bold text-gray-600 uppercase'>
                        Elije un plan
                    </label>
                    <div className='flex gap-3 items-center'>
                        {PLANS.map(plan =>
                            <Fragment key={plan.id} >
                                <label htmlFor="plan">{plan.name}</label>
                                <input type="radio" name='plan' value={plan.id} onChange={e => handleChangeData(e)} />
                            </Fragment>
                        )}
                    </div>
                </div>
                <input type="submit"
                    className='w-full
                     bg-pink-600 hover:bg-pink-900 transition-colors
                     text-white cursor-pointer p-3 uppercase font-bold
                     rounded-lg'
                    value={"Cotizar"} />
            </form>
        </>
    )
}

export default Form