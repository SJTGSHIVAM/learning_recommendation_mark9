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
  const msglength = data[topic].length;
  return (
    <>
      jnfjnfklsdnkl
      {iid > msglength || iid < 0 ? (
        <NotFound />
      ) : (
        <div>
          <h2 className="msg-title">{data[topic][iid].title}</h2>
          <h3 className="msg-title">{data[topic][iid].link}</h3>
          <p className="msg">{data[topic][iid].critic}</p>
        </div>
      )}
    </>
  );
}

export default Rec;
