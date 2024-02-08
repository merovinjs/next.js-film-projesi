import React from "react";
import MovieContainer from "@/containers/movie";
import { getMovie, getMovieVideo } from "@/services/movie";
import { notFound } from "next/navigation";

async function MoviePage({ params }) {
  const movieDetail = await getMovie(params.id);
  const movieVideo = await getMovieVideo(params.id);
  let movieVideoHD = movieVideo.results[1];
  if (!movieDetail) {
    notFound();
  }

  return <MovieContainer movie={movieDetail} movieVideoHD={movieVideoHD} />;
}

export default MoviePage;
