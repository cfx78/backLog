/* eslint-disable react/prop-types */
function Card(props) {
    const getBadgeColor = (rating) => {
        if (rating >= 80) {
            return `text-bg-success`
        } else if (rating <= 59) {
            return `text-bg-danger`
        } else {
            return `text-bg-warning`
        }
    }

    return (
        <div>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body  ">
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item d-flex justify-content-center align-items-center p-5 display-6 border-0">
                            {props.name}
                        </li>
                        <li className="list-group-item d-flex justify-content-center align-items-center fs-5 border-0">
                            {props.released}
                        </li>
                        <li className="list-group-item d-flex justify-content-center align-items-center pt-4 border-0">
                            <span
                                className={`badge ${getBadgeColor(props.meta)}`}
                            >
                                {props.meta}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
