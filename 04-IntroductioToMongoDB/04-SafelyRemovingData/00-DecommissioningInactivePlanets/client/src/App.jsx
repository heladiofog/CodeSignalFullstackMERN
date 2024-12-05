import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [deletedStatus, setDeletedStatus] = useState("");
  
  const handleDelete = () => {
    axios
      .delete("/api/delete-giant-planets")
      .then(response => setDeletedStatus(`Deleted ${response.data.deletedCount} heavy planets!`))
      .catch(error => console.error("Error deleting:", error));
  };
  
  return (
    <div className="App">
      <button onClick={handleDelete}>Decommission Heavy Planets</button>
      <p>{deletedStatus}</p>
    </div>
  );
}

export default App;