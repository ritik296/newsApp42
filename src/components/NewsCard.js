import React from "react";
import "./NewsCard.css";

export default function NewsCard(props) {
  return (
    <div className="col card-view">
      <div className="card h-100">
        <img src={props.imageUrl} className="card-img-top news-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
          <p className="d-flex justify-content-end publish-time"><strong>Time</strong></p>
      </div>
    </div>
  );
}
