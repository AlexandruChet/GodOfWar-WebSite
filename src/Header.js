import "./styles/header/Header.scss";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
    console.log("Menu open:", !isOpen);
  }

  return (
    <header>
      <div className="top-container">
        <button
          className={`menu-button ${isOpen ? "open-burger-menu" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`navigation ${isOpen ? "visible" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">editions</a>
            </li>
            <li className="nav-item">
              <a href="#">controller</a>
            </li>
            <li className="nav-item">
              <a href="#">about game</a>
            </li>
            <li className="nav-item">
              <a href="#">explore</a>
            </li>
            <li className="nav-item">
              <a href="#">news</a>
            </li>
            <li className="nav-item">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`header__bottom ${isOpen ? "visible" : ""}`}>
        <div className="container-text">
          <h1>God of War Ragnarök</h1>
          <p>
            Taking place three years following the events of the previous game,
            Fimbulwinter, a great winter that spans three summers, is drawing to
            a close which will begin the prophesied Ragnarök.
          </p>
          <button>BUY NOW</button>
        </div>
      </div>
    </header>
  );
}

export default Header;