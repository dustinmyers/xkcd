import React from "react";

import "./comic-form.scss";

export default function ComicForm(props) {
  const getNewComic = (e) => {
    e.preventDefault();
    props.setUrl(`https://xkcd.now.sh/?comic=${props.comicNum}`);
  };

  const getRandomComic = (e) => {
    e.preventDefault();
    const num = Math.floor(Math.random() * Math.floor(2297));
    props.setComicNum(num);
    props.setUrl(`https://xkcd.now.sh/?comic=${num}`);
  };

  return (
    <div className="comic-form">
      <button className="random-btn" onClick={getRandomComic}>
        Get random comic
      </button>
      <form>
        <label htmlFor="comic-number">Get comic by number:</label>
        <input
          id="comic-number"
          value={props.comicNum}
          onChange={(e) => props.setComicNum(e.target.value)}
        />
        <button className="arrow-btn" onClick={getNewComic} type="submit">
          →
        </button>
      </form>
    </div>
  );
}
