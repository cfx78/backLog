/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import AddGame from '../../components/AddGame'
import Card from '../../components/Card'
import InputSearch from '../../components/InputSearch'
import Navbar from '../../components/Navbar'
import './Search.css'

function Search() {
    const [gameData, setGameData] = useState([])

    useEffect(
        function () {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key':
                        '57f0506ec1msh9af3927f987a346p16bdd0jsn2a42a6362eb5',
                    'X-RapidAPI-Host':
                        'rawg-video-games-database.p.rapidapi.com',
                },
            }

            fetch(
                'https://rawg-video-games-database.p.rapidapi.com/games?key=d9991dfac1714c41ae89026fc3efc4ec',
                options
            )
                .then((response) => response.json())
                .then((response) => response.results)
                .then((games) => setGameData(games))
                .catch((err) => console.error(err))
        },
        [0]
    )

    const gameCards = gameData.map(function (game) {
        return (
            <div>
                <Card
                    key={game.name}
                    image={game.background_image}
                    name={game.name}
                    released={game.released}
                    meta={game.metacritic}
                />
                <AddGame
                    key={game.name}
                    slug={game.slug}
                    image={game.background_image}
                    name={game.name}
                />
            </div>
        )
    })
    return (
        <div className="border border-top-0 border-4 border-dark-subtle bg-dark text-bg-dark">
            <Navbar />
            <main>
                <InputSearch setGameData={setGameData} />
                <div className="card--container">{gameCards}</div>
            </main>
        </div>
    )
}
export default Search
