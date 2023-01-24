import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  //url에서 변수를 받아오는 함수
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detail.medium_cover_image} />
          <h3>
            {detail.title} ({detail.year})
          </h3>
          <span>{detail.rating} / 10.0</span>

          <p>{detail.description_intro}</p>
          <ul>
            {detail.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
