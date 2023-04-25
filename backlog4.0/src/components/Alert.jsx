const Alert = (props) => {
    return (
        <div
            class="alert alert-danger alert-dismissible fade show font-monospace fs-6"
            role="alert"
        >
            <div>There was an issue with your login </div>
            <div>{props.error}</div>
            <button
                type="button"
                class="btn-close p-4"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => props.setIsError(null)}
            ></button>
        </div>
    )
}

export default Alert
