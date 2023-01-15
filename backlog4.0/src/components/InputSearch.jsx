import { useState } from 'react'

function InputSearch(props) {
    const [searchInput, setSearchInput] = useState('')
    // eslint-disable-next-line react/prop-types
    const setGameData = props.setGameData
    function handleChange(e) {
        console.log(e.target.value)
        setSearchInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(searchInput)
        let slug = searchInput.split(' ').join('-').toLocaleLowerCase()

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':
                    '57f0506ec1msh9af3927f987a346p16bdd0jsn2a42a6362eb5',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
            },
        }

        fetch(
            `https://rawg-video-games-database.p.rapidapi.com/games?key=d9991dfac1714c41ae89026fc3efc4ec&search=${slug}`,
            options
        )
            .then((response) => response.json())
            .then((response) => response.results)
            .then((games) =>
                games === undefined ? alert('no results') : setGameData(games)
            )
            .catch((err) => console.error(err))
        setSearchInput('')
    }

    return (
        <div className="search--container">
            <form className="form" onSubmit={handleSubmit}>
                <label
                    htmlFor="search--box"
                    className="text-black form-label display-2 mb-3"
                >
                    search
                </label>
                <input
                    className="bg-secondary form-control form-control-lg"
                    id="search--box"
                    type="text"
                    onChange={handleChange}
                    value={searchInput.value}
                />
                <button
                    type="submit"
                    className="mt-4 btn btn-lg btn-outline-secondary"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InputSearch
