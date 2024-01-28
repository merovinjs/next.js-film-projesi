import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
const Page = async ({ params, title }) => {
  const keyword = params.keyword;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&page=1&include_adult=false`);
  const data = await res.json();

  return (
    <div className={styles.moviesSection}>
      <h2>Arama Sonuçlarınız...</h2>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {data.results.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image fill unoptimized alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
