import useQuoter from "../hooks/useQuoter"

const Error = () => {
    const { error } = useQuoter();
    return (
        <div className="border text-center border-red-400 bg-red-100 py-3 text-red-700 rounded-lg uppercase">
            <p ></p>{error}</div>
    )
}

export default Error