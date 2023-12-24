import PulseLoader from "react-spinners/PulseLoader";

export default function Loader() {
  return (
    <div className="mx-5">
      <PulseLoader size={20} margin={4} color="blue" className="opacity-10" />
    </div>
  );
}
