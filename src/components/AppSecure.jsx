import React from 'react'
import useQuoter from '../hooks/useQuoter'
import Form from './Form'
import Result from './Result';
import Spinner from './Spinner';

const AppSecure = () => {
    const { result, loading } = useQuoter();
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">
                    Cotizador de Seguros de Autos
                </h1>
                <main className='bg-white md:w-2/3 lg:h-2/4 mx-auto shadow rounded-lg mt-10 p-10'>
                    <Form />
                    {loading ? <Spinner /> : <Result />}
                </main>
            </header>
        </>
    )
}

export default AppSecure