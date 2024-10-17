function ShipFrom({ formSearch, formData, handleChange }) {
    return (
        <form onSubmit={formSearch}>
            <h2>Search</h2>
            <label htmlFor="searchTerm">
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    value={formData.searchTerm}
                    onChange={handleChange} /></label>
            <input type="submit" value="Search" />
        </form>
    )
}

export default ShipFrom