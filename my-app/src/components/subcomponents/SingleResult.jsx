import "../../style/sub/singleresult.css";

export default function SingleResult(props) {
  return (
    <div className="singleresult">
      <div className="single-left">
        <p>{props.vote}</p>
        <p>{props.views}</p>
      </div>
      <div className="single-right">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
