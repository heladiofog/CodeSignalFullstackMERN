import { useState } from 'react';

function SpaceApplicationForm() {
  const [astronaut, setAstronaut] = useState('');

  const handleChange = (event) => setAstronaut(event);
  // Solution:
  // const handleChange = (event) => setAstronaut(event.target.value);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setAstronaut('');
      }}
    >
      <label>
        Aspiring Astronaut's Name: {astronaut}
        <input type="text" value={astronaut} onChange={handleChange} />
      </label>
      <input type="submit" value="Apply" />
    </form>
  );
}

export default SpaceApplicationForm;
