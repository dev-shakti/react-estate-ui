import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { title, img, bedroom, bathroom, price, address } = item;
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="img-container">
        <img src={img} alt="" />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{address}</span>
        </p>
        <div className="price">$ {price}</div>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
