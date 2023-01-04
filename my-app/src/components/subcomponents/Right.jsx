import "../../style/sub/right.css";
import HotQuestions from "./HotQuestions";
const questions = [
  {
    icon: "https://picsum.photos/200/300",
    question: "Diophantine Equations Problem",
  },
];
export default function Right() {
  return (
    <div className="sub-right">
      <div className="sticky-note">
        <h4>The Overflow Blog</h4>
        <h6>You should be reading academic computer science papers</h6>
        <h6>From life without parole to startup CTO (Ep. 522)</h6>
        <h4>Featured on Meta</h4>
        <h6>Navigation and UI research starting soon</h6>
        <h6>From life without parole to startup CTO (Ep. 522)</h6>
      </div>
      <h3>Hot Network Questions</h3>
      <HotQuestions question={questions[0].question} />
    </div>
  );
}
