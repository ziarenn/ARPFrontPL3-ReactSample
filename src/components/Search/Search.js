import React from "react";
import Form from "../Form/Form";
import axios from "axios";
import { API_KEY } from "../../helpers";
import { useState, useEffect } from "react";
import Article from "../Article/Article";
import List from "@mui/material/List";
function Search() {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    if (keyword) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${keyword}&from=2022-06-25&language=en&sortBy=popularity&apiKey=${API_KEY}`
        )
        .then((data) => {
          setArticles(data.data.articles);
          setIsFetching(false);
        });
    }

    return () => {};
  }, [keyword]);
  return (
    <>
      <Form setKeyword={setKeyword} />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          alignContent: "center",
        }}
      >
        {articles.map((art, i) => (
          <Article key={art.title} art={art} />
        ))}
      </List>
    </>
  );
}

export default Search;
