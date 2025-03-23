import "./styles/card/Card-content.scss";
import cardImg from "./images/imgCard.svg";

function CardSection() {
    return (
        <section className="mainSection">
            <div className="first-block">
                <h1>Editions</h1>
                <div className="list">
                    <div className="card"> <img src={cardImg} alt="imgCard" />
                        <h3>Standard Edition</h3>
                        <p>PS5</p>
                        <div>
                            <span>Offline play enabled</span><br></br>
                            <span>Remote Play supported</span><br></br>
                            <span>Trigger effect required</span>
                        </div>
                    </div>
                    <div className="card"> <img src={cardImg} alt="imgCard" />
                        <h3>Standard Edition</h3>
                        <p>PS4</p>
                        <div>
                            <span>Offline play enabled</span><br></br>
                            <span>Remote Play supported</span><br></br>
                            <span>Trigger effect required</span>
                        </div>
                    </div>
                    <div className="card"> <img src={cardImg} alt="imgCard" />
                        <h3>Digital Deluxe Edition</h3>
                        <p>PS5</p>
                        <div>
                            <span>All features of Standard Edition</span><br></br>
                            <span>Darkdale Armour</span><br></br>
                            <span>Official digital soundtrack</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardSection;
