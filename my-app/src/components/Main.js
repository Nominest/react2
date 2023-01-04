import "../style/main.css";
import Left from "./subcomponents/Left";
import Middle from "./subcomponents/Middle";
import Right from "./subcomponents/Right";

export default function Main() {
  return (
    <div className="main">
      <Left />
      <Middle />
      <Right />
    </div>
  );
}
