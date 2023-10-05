import Search from "../../components/Search";
import MovieCard from "../../components/MovieCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
const Landing: React.FC = () => {
  const data = useSelector((state: any) => state.movie);
  console.log([data]);
  return (
    <div className="landing-page">
      <Search />
      {data.loading ? (
        <Loading />
      ) : data.title ? (
        data &&
        [data].map((e: any, key) => {
          return (
            <div key={key}>
              {" "}
              <MovieCard title={e.title} date={e.date} poster={e.poster} />{" "}
            </div>
          );
        })
      ) : (
        "No data"
      )}
    </div>
  );
};

export default Landing;
