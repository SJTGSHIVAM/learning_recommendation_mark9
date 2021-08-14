import { Link } from "react-router-dom";
import dsaRec from "../../data/dsaRec";
import javaRec from "../../data/javaRec";
import jsRec from "../../data/jsRec";
import pythonRec from "../../data/pythonRec";
// import NotFound from "../notfound";
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
const recList = ({ topic }: { topic: string }) => {
  return (
    <div className="scroll mid-section">
      <h2 className="rec-title fix">Pick any message to read</h2>
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

export default recList;
