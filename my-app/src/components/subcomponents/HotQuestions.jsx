import "../../style/sub/hotquestions.css";

export default function HotQuestions(props) {
  return (
    <div className="hotquestions">
      <p>{props.question}</p>
    </div>
  );
}
