/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <div className="card border">
            <img
                className="card-img-top card--img"
                src="https://images.pexels.com/photos/11222497/pexels-photo-11222497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Card image cap"
            />

            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.title}</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
            </ul>
        </div>
    )
}

export default Card
