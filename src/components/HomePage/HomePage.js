import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import Article from "../Article/Article";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);
  // const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    // if (todaysArticles) {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&from=${year}-${
          month < 10 ? `0${month + 1}` : month + 1
        }-${day - 1}&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((data) => {
        setTodaysArticles(data.data.articles);
        console.log(data);
      });
    // }
    return () => {};
  }, []);

  return (
    <>
      <Typography
        align="center"
        variant="h2"
        sx={{ fontSize: "2rem", my: "0.7rem" }}
      >
        Today's hottest news:
      </Typography>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          alignContent: "center",
        }}
      >
        {todaysArticles.map((art, i) => (
          <Article key={i} art={art} />
        ))}
      </List>
    </>
  );
};

export default HomePage;
