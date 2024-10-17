function StarShip({ props }) {
    return (
        <div className="ship">
            <h4> {props.name} </h4>
            <p>Class: {props.starship_class}</p>
            <p>Manufacturer: {props.manufacturer}</p>
            <p>Model: {props.model}</p>
        </div>
    )
}

export default StarShip