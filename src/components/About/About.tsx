import "./About.css";
const About = () => {
  return (
    <div className="bcard mid-section">
      <header className="head">
        <h1>Learning Recommendation</h1>
      </header>
      <section className="about">
        <h1 id="description">Description</h1>
        <p>
          This is a web app that Recommends different learning material based on
          Topics. Built using ReactJS.{" "}
        </p>
        <h1 id="live-link">Live Link</h1>
        <p>
          <a href="https://github.com/SJTGSHIVAM/learning_recommendation_mark9">
            https://github.com/SJTGSHIVAM/learning_recommendation_mark9
          </a>
        </p>
        <h1 id="salient-features-are">Salient features are</h1>
        <ul>
          <li>Built using ReactJS</li>
          <li>Recommending learning resource</li>
          <li>One can choose from different topics as per intrest</li>
          <li>list of different topics is shown</li>
          <li>
            Description rating and a link to acess the resorces is provided with
            every recommendation
          </li>
        </ul>
      </section>
    </div>
  );
};
export default About;
