function Mon(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image_url} alt=""/>
            <p>{props.description}</p>
        </div>
    )
}

export default Mon;