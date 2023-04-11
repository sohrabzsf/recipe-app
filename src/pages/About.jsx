function About() {
  return (
    <section className="self-center max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-secondary my-6">
        Foodies Hub Recipe App
      </h2>
      <p className="text-lg text-justify mb-4">
        This is a recipe application made with React. It uses TheMealDB API for
        online search. Other than searching for recipes online, you can add them
        to your collection which will be stored in your browser, you can modify
        or delete recipes in the collection and also add new ones if you desire.
        This project was made by
        <strong>
          <a href="https://github.com/sohrabzsf" target="_blank">
            {" "}
            Sohrab&nbsp;Zarshamfar
          </a>
        </strong>
        .
      </p>
      <p className="text-lg font-bold">
        Version: <span className="font-normal ml-1">1.0.0</span>
      </p>
    </section>
  );
}

export default About;
