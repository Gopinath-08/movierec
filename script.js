// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '5cedbc22a44c3c21dd9214cbebbe9125';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

// Function to fetch popular movies
async function fetchPopularMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const recommendedMovie = data.results[randomIndex];

        document.getElementById('movie-title').textContent = recommendedMovie.title;
        document.getElementById('movie-genre').textContent = `Genre: ${recommendedMovie.genre}`;
        document.getElementById('movie-description').textContent = recommendedMovie.overview;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
    }
}

// Event listener for the "Get Recommendation" button
document.getElementById('recommend-button').addEventListener('click', () => {
    fetchPopularMovies();
});

// Initial recommendation on page load
fetchPopularMovies();
