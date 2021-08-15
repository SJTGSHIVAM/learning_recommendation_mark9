import { useState } from "react";
import { Link } from "react-router-dom";
import dsaRec from "../../data/dsaRec";
import javaRec from "../../data/javaRec";
import jsRec from "../../data/jsRec";
import pythonRec from "../../data/pythonRec";
// import NotFound from "../notfound";
const topicList = ["dsa", "java", "js", "python"];
const data: {
  [key: string]: {
    id: number;
    title: string;
    rating: number;
    link: string;
    critic: string;
  }[];
} = {
  dsa: dsaRec,
  java: javaRec,
  js: jsRec,
  python: pythonRec,
};
const RecList = ({ top }: { top: string }) => {
  const [topic, setTopic] = useState(top);
  return (
    <div className="scroll mid-section">
      <h2 className="rec-title fix">Pick any topic to check Recommendations</h2>
      <div className="topic-list">
        {topicList.map((i) => {
          // console.log(i, data[i][0].emoji);
          // let x = String(i);
          return (
            <>
              <span
                className={"topic-tile " + (topic == i ? "highlight" : "")}
                onClick={() => {
                  setTopic(i);
                }}
                key={i}
              >
                {i}
              </span>
            </>
          );
        })}
      </div>
      {data[topic].map((rec) => {
        return (
          <Link to={`/rec/${rec.id}/${topic}`} key={rec.id}>
            <div className="card">
              <span className="rec-title">{rec.title}</span>
              <span className="rec-rating">{rec.rating}/10</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecList;
