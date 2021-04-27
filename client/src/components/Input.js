import React, { useState } from "react"

const Input = ({handleValue}) => {
    const [val, setVal] = useState("")

    const handleInputChange = (e) => {
        setVal(e.target.value)
        handleValue(e.target.value)
    }
    return (
        <input value={val} onChange={handleInputChange} />
    )
}

export default Input