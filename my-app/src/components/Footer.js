import "../style/footer.css";
export default function Footer() {
  return (
    <footer>
      <div>
        <img src="./minilogo.png" alt="" srcset="" width={50} height={50} />
      </div>
      <div className="footer-main">
        <div className="foot-main">
          <div id="bold">stack overflow</div>
          <div id="small">Questions</div>
          <div id="small">Help</div>
        </div>
        <div className="foot-main">
          <div id="bold">products</div>
          <div id="small">Teams</div>
          <div id="small">Advertising</div>
          <div id="small">Collectives</div>
          <div id="small">Talent</div>
        </div>
        <div className="foot-main">
          <div id="bold">company</div>
          <div id="small">About</div>
          <div id="small">Press</div>
          <div id="small">Work Here</div>
          <div id="small">Legal</div>
          <div id="small">Privacy Policy</div>
          <div id="small">Terms Policy</div>
          <div id="small">Terms Policy</div>
          <div id="small">Terms Policy</div>
        </div>
        <div className="foot-main">
          <div id="bold">Stack exchange newtwork</div>
          <div id="small">About</div>
          <div id="small">Press</div>
          <div id="small">Work Here</div>
          <div id="small">Legal</div>
          <div id="small">Privacy Policy</div>
          <div id="small">Terms Policy</div>
          <div id="small">Terms Policy</div>
          <div id="small">Terms Policy</div>
        </div>
      </div>
      <div className="about">
        <ul>
          <a href="">blog</a>
          <a href="">facebook</a>
          <a href="">twitter</a>
          <a href="">linkedin</a>
          <a href="">instagram</a>
        </ul>
        <div>
          Site design / logo © 2023 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.12.21.43127
        </div>
      </div>
    </footer>
  );
}
