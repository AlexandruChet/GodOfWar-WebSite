# About my project

## This small vub site is written in the react js framework and is written mainly with its basic features and simple hooks

# About React itself

### React is a JavaScript framework that allows you to work more conveniently and better with the basis of markup, allowing you to write html code in JS and more conveniently write JS, there are also hooks and other applications of this library

```JS
import "./styles/header/Header.scss";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
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
              <button className="nav-link">editions</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">controller</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">about game</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">explore</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">news</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">FAQ</button>
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

```
### This is an example of React code with hooks and its basic syntax
___
