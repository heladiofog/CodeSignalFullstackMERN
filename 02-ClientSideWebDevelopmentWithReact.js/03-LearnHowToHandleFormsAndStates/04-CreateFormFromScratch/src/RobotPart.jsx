// This component represents a part of a robot
function RobotPart(props) {
  return (
    <div>
      {props.name} with color {props.color} is ready!
    </div>
  );
}

export default RobotPart;
