import { createContext, useState } from "react";
import { formatMoney, getDiffyear, handleBrand, handlePlan } from "../helpers";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
    const [data, setData] = useState({
        brand: "",
        year: "",
        plan: ""
    });
    const [error, setError] = useState("");
    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const quouteSecure = () => {
        let res = 20000;
        res -= ((getDiffyear(data.year) * 3) * res) / 100;
        res *= handleBrand(data.brand);
        res *= handlePlan(data.plan);
        res = formatMoney(res);

        setLoading(true);
        setTimeout(() => {
            setResult(res);
            setLoading(false);
        }, 800);

    }

    return (
        <QuoterContext.Provider value={{ data, handleChangeData, error, setError, quouteSecure, result, loading }}>
            {children}
        </QuoterContext.Provider>
    )

}

export {
    QuoterProvider
}

export default QuoterContext;