const searchInput = document.querySelector('input')
const apiKey = 'd0f37330'; // Replace with your actual API key
// const movieDetails = document.getElementById('movieDetails');
const movieDetails = document.querySelector('.box');
const movieName = document.getElementById('movieName')
const movieImg = document.getElementById('movieImg')

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value;
    if (searchTerm) {
        fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    console.log(data)
                    // movieDetails.innerHTML = `
                    //     <h2>${data.Title}</h2>
                    //     <img src="${data.Poster}" alt="${data.Title} Poster">
                    //     <p>Year: ${data.Year}</p>
                    //     <p>Director: ${data.Director}</p>
                    //     <p>Plot: ${data.Plot}</p>
                    // `;
                    movieName.innerHTML = data.Title
                    movieImg.src = data.Poster
                } else {
                    movieDetails.innerHTML = 'Movie not found.';
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000)
                }
            })
            .catch(error => {
                console.error('Error:', error);
                movieDetails.innerHTML = 'An error occurred while fetching data.';
                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            });
    }
    }
})



