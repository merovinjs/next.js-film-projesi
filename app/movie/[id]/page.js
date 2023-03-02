import React from "react";
import MovieContainer from "@/containers/movie";
import { getMovie } from "@/services/movie";
import { notFound } from "next/navigation";

async function MoviePage({ params }) {
  const movieDetail = await getMovie(params.id);
  if (!movieDetail) {
    notFound();
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
