import Search from "../../components/Search";
import MovieCard from "../../components/MovieCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
const Landing: React.FC = () => {
  const data = useSelector((state: any) => state.movie);
  return (
    <div className="landing-page">
      <Search />
      {data.loading ? (
        <Loading />
      ) : data.allData?.Title ? (
        data &&
        [data.allData].map((e: any, key) => {
          return (
            <div key={key}>
              {" "}
              <MovieCard
                title={e.Title}
                date={e.Released}
                poster={e.Poster}
                allData={data}
              />{" "}
            </div>
          );
        })
      ) : (
        <p className="no-data">No data</p>
      )}
    </div>
  );
};

export default Landing;
