import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./css/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  getMovies = async () => {
    const clientId = "5DD7QG87COD4ANQXA827";
    const nation = "대한민국";
    const type = "극영화";
    const releaseDts = "20201101";
    const {
      data: { Data }
    } = await axios.get(
      `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${clientId}&nation=${nation}&releaseDts=${releaseDts}&type=${type}&detail=Y&listCount=500`
    );

    this.setState({ movies: Data[0], isLoading: false });
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
            {movies.Result.map((item) => (
              <Movie
                key={item.DOCID}
                id={item.DOCID}
                title={item.title}
                year={item.prodYear}
                summary={
                  item.plots.plot.find((text) => text.plotLang === "한국어")
                    .plotText
                }
                poster={item.posters}
                genres={item.genre}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
