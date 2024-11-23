import { useState } from 'react';

function AstronautApplicationForm() {
  // TODO: Set a state variable for the mission's name with default value 'Mars Voyager'
  const [missionName, setMissionName] = useState('Mars Voyager');

  const handleInputChange = (e) => {
    setMissionName(e.target.value);
  };
  // TODO: Also include a submit input. Prevent the default form submission behavior.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`MissionImpoossible name ${missionName}: go!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* // TODO: Implement a form with a label and text input for the mission's name */}
      <label>
        Mission Name:
        <input type="text" value={missionName} onChange={handleInputChange} />
      </label>
      <br />
      <input type="submit" value="Start Mission" />
    </form>
  );
}

export default AstronautApplicationForm;
