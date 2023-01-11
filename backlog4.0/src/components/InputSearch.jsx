import React from 'react'

function InputSearch() {
    return (
        <div>
            <label
                htmlFor="search--box"
                className="text-black form-label display-2"
            >
                search
            </label>

            <input
                className="bg-secondary form-control form-control-lg"
                id="search--box"
                type="text"
            />
            <button
                type="submit"
                className="mt-3 btn btn-lg btn-outline-secondary"
            >
                Submit
            </button>
        </div>
    )
}

export default InputSearch
