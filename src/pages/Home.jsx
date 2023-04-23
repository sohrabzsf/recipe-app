import { useNavigate } from "react-router-dom";
import { FaCheck, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import chicken from "../assets/chicken.jpg";
import paella from "../assets/paella.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="self-center my-16 lg:my-24 lg:px-6">
      <section className="flex justify-center items-center flex-col lg:flex-row-reverse gap-16 mb-24 lg:mb-32 p-0">
        <img
          src={chicken}
          alt="A grilled chicken dish."
          className="w-full max-w-lg rounded-lg shadow-2xl"
        />
        <div className="fade-in-left max-w-lg">
          <h2 className="text-5xl font-bold mb-8">What Are We About</h2>
          <p className="text-xl mb-8">
            Foodies Hub is a place where you can please your soul and tummy with
            delicious food recipes of all cuisine. And our service is absolutely
            free. So start exploring now.
          </p>
          <button
            onClick={() => navigate("/findrecipes")}
            className="btn btn-secondary text-lg text-gray-900"
          >
            Explore Now
          </button>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col lg:flex-row gap-16 mb-24 lg:mb-32 p-0">
        <img
          src={paella}
          alt="a spanish paella dish."
          className="w-full max-w-lg rounded-lg shadow-2xl"
        />
        <div className="fade-in-right max-w-lg">
          <h2 className="text-5xl font-bold mb-8">Improve Your Skills</h2>
          <ul className=" leading-9 text-xl mb-8">
            <li>
              <FaCheck className="inline text-accent mr-2" /> Learn new recipes
            </li>
            <li>
              <FaCheck className="inline text-accent mr-2" /> Experiment with
              food
            </li>
            <li>
              <FaCheck className="inline text-accent mr-2" /> Add recipes to
              your collection
            </li>
            <li>
              <FaCheck className="inline text-accent mr-2" /> Modify them the
              way you want
            </li>
            <li>
              <FaCheck className="inline text-accent mr-2" /> Write your own
              recipes
            </li>
          </ul>
          <button
            onClick={() => navigate("/mycollection")}
            className="btn btn-secondary text-lg text-gray-900"
          >
            Start Now
          </button>
        </div>
      </section>
      <section className="fade-in-up flex flex-col max-w-5xl">
        <FaQuoteLeft />
        <p className="text-xl text-justify px-8">
          Food is everything we are. It's an extension of nationalist feeling,
          ethnic feeling, your personal history, your province, your region,
          your tribe, your grandma. It's inseparable from those from the get-go.
        </p>
        <FaQuoteRight className="self-end" />
        <div className="self-end text-lg pr-8 mt-12">Anthony Bourdain</div>
      </section>
    </div>
  );
}

export default Home;
