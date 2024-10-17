import StarShip from './StarShip';

function ShipList({ ships }) {
    return (<>
        <h2>Results</h2>
        <p>Number of results: {ships.length}   </p>
        <section className="results">
            {ships.map((ship, index) => {
                return (
                    <StarShip key={index} props={ship}></StarShip>
                )
            })}
        </section>
    </>
    )
}

export default ShipList