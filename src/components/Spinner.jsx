import spinner from "../assets/spinner.svg";

function Spinner() {
  return (
    <div>
      <img
        width={200}
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto mt-16"
      />
    </div>
  );
}

export default Spinner;
