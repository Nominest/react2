import SingleResult from "./SingleResult";
import "../../style/sub/middle.css";

const results = [
  {
    title: "component to rerender without calling setState?",
    description:
      "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 2000,
    answers: 32,
    views: 2,
  },
  {
    title: "force a React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 100,
    answers: 2,
    views: 20,
  },
  {
    title: "rerender without calling setState?",
    description:
      "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 20,
    answers: 3,
    views: 200,
  },
];

export default function Middle() {
  return (
    <div className="sub-middle">
      <h1>Questions tagged</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi,
        natus, excepturi deleniti maiores odio magnam nihil quos reiciendis
        aspernatur quibusdam dolor, at in. Minima error reiciendis suscipit
        officiis explicabo.
      </p>
      <SingleResult
        title={results[0].title}
        description={results[0].description}
        vote={results[0].vote + " votes"}
        views={results[0].views + " views"}
      />
      <SingleResult
        title={results[1].title}
        description={results[1].description}
        vote={results[1].vote + " votes"}
        views={results[1].views + " views"}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote + " votes"}
        views={results[2].views + " views"}
      />
    </div>
  );
}
