/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function GamesList(props) {
    const userNames = props.list
    console.log(userNames)
    const userLog = userNames.map((game) => {
        return <li className="fs-6">{game}</li>
    })
    return (
        <div>
            <ul>{userLog}</ul>
        </div>
    )
}

export default GamesList
