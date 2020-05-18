const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('один из полседний просмотренных фильмов', ''),
      b = prompt('на сколько оцентие его?',''),
      c = prompt('один из полседний просмотренных фильмов', ''),
      d = prompt('на сколько оцентие его?','');

    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

