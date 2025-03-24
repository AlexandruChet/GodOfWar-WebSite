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
