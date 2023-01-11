import React from 'react'
import InputSearch from '../../components/InputSearch'
import Navbar from '../../components/Navbar'
import './Search.css'

function Search() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }

    fetch(
        'https://api.rawg.io/api/games?key=d9991dfac1714c41ae89026fc3efc4ec',
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
    return (
        <div className=" bg-dark text-bg-dark">
            <Navbar />
            <main>
                <InputSearch />
            </main>
        </div>
    )
}
export default Search
