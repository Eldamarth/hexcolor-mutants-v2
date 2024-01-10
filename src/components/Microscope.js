import Bacterium from "./Bacterium";

export default function Microscope(props) {
  return (
    <div className="microscope">
      <div className="mask"></div>
      {[...Array(25)].map((_, index) => (
        <Bacterium key={index} />
      ))}
    </div>
  );
}
