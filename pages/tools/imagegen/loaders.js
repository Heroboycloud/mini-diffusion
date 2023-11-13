import GridLoader from "react-spinners/GridLoader";

export default function Loader() {
  return (
    <div>
      <GridLoader size={30} margin={4} color="blue" className="opacity-10" />
    </div>
  );
}
