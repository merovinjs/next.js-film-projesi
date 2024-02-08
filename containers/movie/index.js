import { FeaturedMovie } from "@/components/featured-movie";
import React from "react";

function MovieContainer({ movie, movieVideoHD }) {
  return <FeaturedMovie movie={movie} isCompact={false} movieVideoHD={movieVideoHD} />;
}

export default MovieContainer;
