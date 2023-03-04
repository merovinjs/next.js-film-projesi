import React from "react";

import { FeaturedMovie } from "@/components/featured-movie";
import Categories from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";
import Carousel from "@/app/carousel/page";

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  selectedCategory,
  categories = [],
}) => {
  return (
    <div>
      <FeaturedMovie
        movie={
          topRatedMovies?.[Math.floor(Math.random() * topRatedMovies.length)]
        }
      />
      <Carousel categories={categories} />
      {/* <Categories categories={categories.slice(1, 7)} /> */}
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection title="populer film" movies={topRatedMovies} />
      <MoviesSection title="Action" movies={popularMovies} />
    </div>
  );
};

export default HomeContainer;
