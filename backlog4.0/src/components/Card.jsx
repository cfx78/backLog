/* eslint-disable react/prop-types */
function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item d-flex justify-content-center align-items-center border-0">
                            {props.name}
                        </li>
                        <li className="list-group-item d-flex justify-content-center align-items-center border-0">
                            {props.released}
                        </li>
                        <li className="list-group-item d-flex justify-content-center align-items-center border-0">
                            {props.meta}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
