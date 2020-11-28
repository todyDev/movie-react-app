import React from "react";
import axios from "axios";
import Movie from "./Move";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    console.log(this.state);
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((item) => (
              <Movie
                key={item.id}
                id={item.id}
                title={item.title}
                year={item.year}
                summary={item.summary}
                poster={item.medium_cover_image}
                genres={item.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
