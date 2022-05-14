select
  "releaseYear",
  "genres"."name" as "genre"

from "filmGenre"

join "genres" using ("genreId")
join "films" using ("filmId")


where "title" = 'Boogie Amelie';
