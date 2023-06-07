import React, { useState } from 'react'
import CategoriesList from './CategoriesList'

const Categories = ({ categories = [], setCategories }) => {
    const [inputValue, setInputValue] = useState("")

    const handleinput = ({ target }) => {
        setInputValue(target.value)
    }

    const handleAddCatBtn = () => {
        if (!categories.includes(inputValue)) {
            setCategories([inputValue, ...categories])
            setInputValue("")
        }
    }

    return (
        <>
            {/* fragment */}
            <input onChange={(e) => handleinput(e)}
                placeholder="Write category name"
                type="text"
                value={inputValue} />
            <button onClick={handleAddCatBtn}
                type="button"
                className="btn btn-outline-primary btn-sm ms-2 mb-1">
                Add </button>
            <br />
            <CategoriesList categories={categories} />
        </>
    )
}

export default Categories