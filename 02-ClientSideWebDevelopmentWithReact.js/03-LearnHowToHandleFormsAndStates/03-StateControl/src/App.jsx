import { useState } from 'react';

function SpaceRegistrationForm() {
  const [missionName, setMissionName] = useState("Mission");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Ready to launch: ${missionName}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mission Name:
        <input type="text" value={missionName} onChange={/* TODO: Add the function to handle mission name change. */} />
        {/* Solution: */}
        {/* <input type="text" value={missionName} onChange={(e) => setMissionName(e.target.value)} /> */}
      </label>
      <input type="submit" value="Register Mission" />
    </form>
  );
}

export default SpaceRegistrationForm;