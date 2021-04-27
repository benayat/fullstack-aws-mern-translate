import React, { useState } from "react"


const SelectOption = ({handleChange}) => {
    const [option, setOption] = useState("all")

    const handleOptionChange = (e) => {
        setOption(e.target.value)
        handleChange(e.target.value)
    }

    return (
            <div className="by__calories">
                <label>Sort Recipes By: </label>
                <select name="favorite" id="favorite" value={option} onChange={handleOptionChange}>
                    <option value="all">All</option>
                    <option value="calories">Calories</option>
                    <option value="time">Time</option>
                </select>
            </div>
    )
}

export default SelectOption