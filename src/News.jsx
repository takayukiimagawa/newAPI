import React, { Component } from "react";

const baseURL = "https://newsapi.org/v2/";
export default class News extends Component {
  state = {
    newsSource: "",
    newsSources: [],
    articles: null
  };

  componentDidMount() {
    fetch(`${baseURL}sources?apiKey=c12b2e298f3b4dea8a902fc652d1dda2`)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            newsSources: res.sources,
            newsSource:
              res.sources[Math.floor(Math.random() * res.sources.length)].id
          },
          () => console.log(res.sources)
        );

        fetch(
          `${baseURL}top-headlines?sources=${
            this.state.newsSource
          }&apiKey=c12b2e298f3b4dea8a902fc652d1dda2`
        )
          .then(res => res.json())
          .then(res =>
            this.setState(
              {
                articles: res.articles
              },
              () => console.log(res.articles)
            )
          );
      });
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        {!articles ? (
          <div>No articles</div>
        ) : (
          articles.map((article, index) => (
            <div className="card" key={article.publishedAt + index}>
              <p className="title">
                {article.title} ({article.source.name})
              </p>
              <p className="discription">{article.description}</p>
              <a href={article.url} target="_blank">
                Visit source
              </a>
            </div>
          ))
        )}
      </div>
    );
  }
}
