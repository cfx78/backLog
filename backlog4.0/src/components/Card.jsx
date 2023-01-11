/* eslint-disable react/prop-types */
function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.name}</li>
                        <li className="list-group-item">{props.released}</li>
                        <li className="list-group-item">{props.meta}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
