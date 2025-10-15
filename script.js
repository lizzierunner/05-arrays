// Array of Comedy movies
const comedyMovies = [
  "The Hangover",
  "Superbad",
  "Bridesmaids",
  "Ferris Bueller's Day Off"
];

// Array of Action movies
const actionMovies = [
  "Mad Max: Fury Road",
  "Die Hard",
  "The Dark Knight",
  "Gladiator"
];

// Array of Drama movies
const dramaMovies = [
  "The Shawshank Redemption",
  "Forrest Gump",
  "The Godfather",
  "A Beautiful Mind"
];

// Array of Sci-Fi movies
const sciFiMovies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Back to the Future"
];
// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create an empty array to hold the movie list
  let movieList = [];


  // Push movie titles directly to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList.push("The Hangover");
    movieList.push("Superbad");
    movieList.push("Bridesmaids");
    movieList.push("Ferris Bueller's Day Off");
  } else if (selectedGenre === "Action") {
    movieList.push("Mad Max: Fury Road");
    movieList.push("Die Hard");
    movieList.push("The Dark Knight");
    movieList.push("Gladiator");
  } else if (selectedGenre === "Drama") {
    movieList.push("The Shawshank Redemption");
    movieList.push("Forrest Gump");
    movieList.push("The Godfather");
    movieList.push("A Beautiful Mind");
  } else if (selectedGenre === "Sci-Fi") {
    movieList.push("Inception");
    movieList.push("The Matrix");
    movieList.push("Interstellar");
    movieList.push("Back to the Future");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}!`;
});
