import "./About.css";
const About = () => {
  return (
    <div className="bcard mid-section">
      <header className="head">
        <h1>About</h1>
      </header>
      <section className="about">
        <h2 id="description">Description</h2>
        <p>
          This is a web app that Recommends different learning material based on
          Topics. Built using ReactJS.{" "}
        </p>
        <h2 id="live-link">Live Link</h2>
        <p>
          <a href="https://github.com/SJTGSHIVAM/learning_recommendation_mark9">
            Click here
          </a>
        </p>
        <h2 id="salient-features-are">Salient features are</h2>
        <ol>
          <li>Built using ReactJS</li>
          <li>Recommending learning resource</li>
          <li>One can choose from different topics as per intrest</li>
          <li>list of different topics is shown</li>
          <li>
            Description rating and a link to acess the resorces is provided with
            every recommendation
          </li>
        </ol>
      </section>
    </div>
  );
};
export default About;
