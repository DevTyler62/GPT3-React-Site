import React from "react";
import "./article.css";

const Article = ({ imgURl, date, title }) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imgURl} alt="blog" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
