// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // get movie directors
  const directors = moviesArray.map(movies => movies.director);

  // clean arr
  return directors.filter(
    (director, index) => directors.indexOf(director) === index
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    movie =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    return +(
      moviesArray.reduce((sum, score) => {
        if (typeof score.score !== 'number') {
          score.score = 0;
        }
        return sum + score.score;
      }, 0) / moviesArray.length
    ).toFixed(2);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(
    moviesArray.filter(movie => movie.genre.includes('Drama'))
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = [...moviesArray];

  orderedMovies
    .sort((a, b) => a.year - b.year) // sorting by year. if year a is smaller than year b, result is negative, order is same. if year a is bigger than year b, result is negative, year b comes first
    .sort((a, b) => {
      if (a.year === b.year) {
        // if the 2 years are the same
        if (a.title < b.title) {
          // if title a is smaller than title b, the result should be negative
          return -1;
        } else if (a.title > b.title) {
          // if title a is bigger than title b, the result should be positive
          return 1;
        }
      }
    });

  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabeticMovies = [...moviesArray].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else if (a.title === b.title) {
      return 0;
    }
  });
  if (alphabeticMovies.length <= 20) {
    return alphabeticMovies.map(movies => movies.title);
  } else {
    return alphabeticMovies.map(movies => movies.title).slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = JSON.parse(JSON.stringify(moviesArray));

  /* newMoviesArray.forEach(movie => {
    movie.duration = movie.duration
      .slice(0, movie.duration.indexOf('min'))
      .split('h ');
  }); */

  newMoviesArray.map(movie => {
    movie.duration = movie.duration
      .slice(0, movie.duration.indexOf('min'))
      .split('h ');
  });

  console.log(moviesArray, newMoviesArray);
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
