import React, { useEffect, useState } from 'react'
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
                'https://rawg-video-games-database.p.rapidapi.com/games?key=d9991dfac1714c41ae89026fc3efc4ec&page_size=2"',
                options
            )
                .then((response) => response.json())
                .then((response) => response.results)
                .then((games) => setGameData(games))
                .catch((err) => console.error(err))
        },
        [0]
    )
    console.log(gameData)
    const gameCards = gameData.map(function (game) {
        return (
            <Card
                key={game.id}
                image={game.background_image}
                name={game.name}
                released={game.released}
                meta={game.metacritic}
            />
        )
    })
    return (
        <div className=" bg-dark text-bg-dark">
            <Navbar />
            <main>
                <InputSearch />
                <div className="card--container">{gameCards}</div>
            </main>
        </div>
    )
}
export default Search
