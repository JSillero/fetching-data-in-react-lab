// src/App.jsx
import ShipFrom from './components/ShipForm';
import ShipList from './components/ShipList';
import { show, search } from './services/starshipService';
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [starShips, setStarShips] = useState([]);

  //this use effect only triggers once when rendering the page initially. due to the second parameter passed being and empty array 
  useEffect(() => {
    const fetchData = async () => {
      const data = await show();
      setStarShips(data.results);

    };
    fetchData()
      .then(() => { setLoading(false) });//set loading state to false
  }, []);

  const [formData, setFormData] = useState({
    searchTerm: '',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formSearch = async (e) => {
    setLoading(true)//set loading state to true 
    e.preventDefault();
    const data = await search(formData.searchTerm);
    setStarShips(data.results).then(setLoading(false));
  }


  return (
    < >
      <h1>Starwars API</h1>

      <ShipFrom formSearch={formSearch} formData={formData} handleChange={handleChange} ></ShipFrom>

      {loading ? <h3>Loading...</h3> : <ShipList ships={starShips}></ShipList>}


    </>
  );
}

export default App
