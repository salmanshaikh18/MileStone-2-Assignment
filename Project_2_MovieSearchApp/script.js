const searchInput = document.querySelector("input");
const main = document.querySelector("main");

const searchMovies = () => {
  main.innerHTML = ""; // Clear the previous search results;
  const inputMovie = document.getElementById("inputMovie").value;
  const movieBox = document.querySelector(".box");
  const apiKey = "d0f37330";
  if (inputMovie) {
    fetch(`http://www.omdbapi.com/?s=${inputMovie}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        if (data.Search) {
          data.Search.forEach((movie) => {
            const movieBox = document.createElement("div");
            movieBox.setAttribute("class", "box");

            movieBox.innerHTML = `
                <div class="imgBox">
                <img id="movieImg" src="${movie.Poster}" alt="movieImg">
                </div>
                <h2 id="movieName">"${movie.Title}"</h2>
                <button id="watchNowBtn">"Watch Now"</button>
            `;

            document.querySelector("main").appendChild(movieBox);
          });
        } else {
          movieBox.innerHTML = "Movie Not Found!";
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
};

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchMovies();
  }
});
