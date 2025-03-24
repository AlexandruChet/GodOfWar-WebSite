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

# How modal window works???
### using mainly the useState hook taken from the header and with importing files in general, the basic functionality of the modal window works great, the only thing is that there were small problems at the creation stage, this emphasizes the importance of checks in the code
``` JS
  // ModalWindows.js
  import React from "react";
import "./styles/modal/Modal.scss";

function ModalWindow({ isVisible, toggleModal }) {
    console.log("Modal isVisible:", isVisible);

    return (
        <section className={`modal-window ${isVisible ? "visible" : ""}`}>
            <div className="modal-content">
                <button onClick={toggleModal}>Close Modal</button>
            </div>
        </section>
    );
}

export default ModalWindow;
  // Card.js
  import React, { useState } from "react";
import "./styles/card/Card-content.scss";
import cardImg from "./images/imgCard.svg";
import playImg from "./images/play.svg";
import ModalWindow from "./ModalWindow";

function CardSection() {
    const [isVisible, setIsVisible] = useState(false);

    function toggleModal() {
        console.log("Toggle Modal:", !isVisible);
        setIsVisible((prev) => !prev);
    }

    return (
        <>
            <section className="mainSection">
                <div className="first-block">
                    <h1>Editions</h1>
                    <div className="list">
                        <div className="card">
                            <img src={cardImg} alt="imgCard" />
                            <h3>Standard Edition</h3>
                            <p>PS5</p>
                            <div>
                                <span>Offline play enabled</span>
                                <br />
                                <span>Remote Play supported</span>
                                <br />
                                <span>Trigger effect required</span>
                                <br />
                                <h3>19.99$</h3>
                                <button onClick={toggleModal}>BUY NOW</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={cardImg} alt="imgCard" />
                            <h3>Standard Edition</h3>
                            <p>PS4</p>
                            <div>
                                <span>Offline play enabled</span>
                                <br />
                                <span>Remote Play supported</span>
                                <br />
                                <span>Trigger effect required</span>
                                <br />
                                <h3>19.99$</h3>
                                <button onClick={toggleModal}>BUY NOW</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={cardImg} alt="imgCard" />
                            <h3>Digital Deluxe Edition</h3>
                            <p>PS5</p>
                            <div>
                                <span>All features of Standard Edition</span>
                                <br />
                                <span>Darkdale Armour</span>
                                <br />
                                <span>Official digital soundtrack</span>
                                <br />
                                <h3>19.99$</h3>
                                <button onClick={toggleModal}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-block">
                    <h1>DualSense</h1>
                    <div className="main-content">
                        <div>
                            <p className="first-paragraph">
                                You can also buy an exclusive controller with the
                                <strong className="first-strong"> God of War Ragnarok </strong>
                                theme for PS5
                            </p>
                            <p className="second-paragraph">
                                If you purchase a controller and a game (any edition), you will receive a
                                <strong className="second-strong">15%</strong> discount on two items.
                            </p>
                            <div>
                                <h3>35.99$</h3>
                                <button onClick={toggleModal}>buy dualsense with a game</button>
                            </div>
                        </div>
                        <img src={playImg} alt="imgCard" />
                    </div>
                </div>
            </section>

            <ModalWindow isVisible={isVisible} toggleModal={toggleModal} />
        </>
    );
}

export default CardSection;
  // scss
  .modal-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    visibility: hidden;
    opacity: 0;
    z-index: 9999999999999;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

    &.visible {
        visibility: visible;
        opacity: 1;
    }
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
}
```
## using this framework you can make the logic of a modal window