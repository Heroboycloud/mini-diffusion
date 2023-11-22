import PulseLoader from "react-spinners/PulseLoader";

export default function Loader() {
  return (
    <div>
      <PulseLoader size={30} margin={4} color="blue" className="opacity-10" />
    </div>
  );
}
