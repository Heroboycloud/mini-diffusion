import PulseLoader from "react-spinners/PulseLoader";

export default function Loader() {
  return (
    <div>
      <PulseLoader size={10} margin={4} className="opacity-40" />
    </div>
  );
}
