import React from "react";

import "./comic.scss";

export default function Comic({ comic }) {
  return (
    <div className="comic-wrapper">
      <h2>
        {comic.safe_title} - {comic.month}/{comic.day}/{comic.year}
      </h2>
      <img className="comic-image" src={comic.img} alt={comic.alt} />
    </div>
  );
}
