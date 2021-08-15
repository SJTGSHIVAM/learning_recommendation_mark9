import { useParams } from "react-router-dom";
import "../App.css";
import dsaRec from "../data/dsaRec";
import javaRec from "../data/javaRec";
import jsRec from "../data/jsRec";
import pythonRec from "../data/pythonRec";
import NotFound from "./notfound";
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
function Rec() {
  const { id, topic } = useParams<{ id: string; topic: string }>();
  console.log("here:", id, topic);
  const iid = parseInt(id, 10);
  const reclength = data[topic].length;
  return (
    <div className="mid-section">
      {iid > reclength || iid < 0 ? (
        <NotFound />
      ) : (
        <div className="rec-content">
          <h2 className="rec-title">{data[topic][iid].title}</h2>
          <span>
            <a
              className="rec-link topic-tile highlight"
              href={data[topic][iid].link}
            >
              Link
            </a>
          </span>
          <p className="rec-critic">{data[topic][iid].critic}</p>
        </div>
      )}
    </div>
  );
}

export default Rec;
