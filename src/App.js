import React from "react";
import { useEffect, useState } from "react";

import Comic from "./components/Comic";
import ComicForm from "./components/ComicForm";
import "./App.scss";

function App() {
  const [comicNum, setComicNum] = useState("");
  const [url, setUrl] = useState("https://xkcd.now.sh/?comic=latest");
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  const [comic, setComic] = useState({});
  useEffect(() => {
    const fetchComic = async () => {
      setIsFetching(true);
      try {
        const res = await fetch(url);
        if (res.status >= 200 && res.status <= 299) {
          const data = await res.json();
          setComicNum(data.num);
          setComic(data);
        } else {
          const { error } = await res.json();
          setError(error);
        }
        setIsFetching(false);
      } catch (e) {
        setIsFetching(false);
        console.log(e);
      }
    };

    fetchComic();
  }, [url]);
  return (
    <main>
      <h1 className="title">
        XKCD <span>comics</span>
      </h1>
      <Comic comic={comic} />
      <ComicForm
        setUrl={setUrl}
        comicNum={comicNum}
        setComicNum={setComicNum}
      />
    </main>
  );
}

export default App;
