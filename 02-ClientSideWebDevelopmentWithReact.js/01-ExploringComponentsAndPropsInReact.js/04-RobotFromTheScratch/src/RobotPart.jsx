// TODO: Create the RobotPart Component having two props: name and material
// Solution
function RobotPart({ name, material }) {
  return (
    <div>
      Robot has a {name} made of {material}!
    </div>
  );
}

export default RobotPart;
