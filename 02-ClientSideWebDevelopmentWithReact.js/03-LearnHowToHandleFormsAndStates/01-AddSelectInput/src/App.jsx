import { useState } from 'react';

function AstronautApplicationForm() {
  // Update state
  const [astronaut, setAstronaut] = useState({ name: '', age: '', origin: '' });

  const handleInputChange = (event) => {
    setAstronaut({ ...astronaut, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update submit message
    alert(
      `Astronaut Name: ${astronaut.name}, Age: ${astronaut.age}, Origin: ${astronaut.origin}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={astronaut.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          name="age"
          type="number"
          value={astronaut.age}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* Solution: */}
      <label>
        Origin:
        <select
          name="origin"
          type="select"
          value={astronaut.origin}
          onChange={handleInputChange}
        >
          <option value="Mars">Mars</option>
          <option value="Moon">Moon</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Register" />
    </form>
  );
}

export default AstronautApplicationForm;
