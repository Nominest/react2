import "../style/header.css";
export default function Header() {
  return (
    <header>
      <ul>
        <img src="./stlogo.png" alt="" srcset="" width={150} height={30} />
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">For Teams</a>
        </li>
        <div className="head"></div>
      </ul>
      <input type="text" placeholder="Search" />
      <button id="login">Login</button>
      <button id="sign">Sign up</button>
    </header>
  );
}
