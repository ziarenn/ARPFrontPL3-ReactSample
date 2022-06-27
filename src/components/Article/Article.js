import React from "react";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Article = ({ art }) => {
  return (
    <Card variant="outlined" sx={{ mb: "10px" }}>
      <ListItem key={art.title}>
        <a href={art.url} style={{ textDecoration: "none" }} target="__blank">
          <img src={art.urlToImage} alt={art.title} style={{ width: "100%" }} />
          <ListItemText sx={{ color: "black" }}>{art.title}</ListItemText>
        </a>
      </ListItem>
    </Card>
  );
};

export default Article;
