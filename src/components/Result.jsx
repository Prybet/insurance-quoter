import { useCallback, useMemo, useRef } from 'react'
import { BRANDS, PLANS } from '../constants';
import useQuoter from '../hooks/useQuoter'

const Result = () => {
    const { result, data } = useQuoter();
    const { brand = 0, year, plan = 0 } = data;

    const [brandName] = useMemo(() => BRANDS.filter(b => b.id === Number(brand)), [result]);
    const [planName] = useCallback(PLANS.filter(p => p.id === Number(plan)), [result]);
    const yearRef = useRef(year);

    if (!result) return null;

    return (
        <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
            <h2 className='text-gray-600 font-black text-3xl'>
                Resumen
            </h2>
            <p className='my-2'>
                <span>Marca: </span>
                {brandName.name}
            </p>
            <p className='my-2'>
                <span>Plan: </span>
                {planName.name}
            </p>
            <p className='my-2'>
                <span>Año del auto: </span>
                {yearRef.current}
            </p>
            <p className='my-2 text-2xl'>
                <span>Total Cotización: </span>
                {result}
            </p>
        </div>
    )
}

export default Result