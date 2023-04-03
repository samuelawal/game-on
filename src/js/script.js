// for entrance link to main site
function enterSite() {
	window.location.href = "index.html";
}
// For Search implementation
const form = document.querySelector('#search-form');
		const searchInput = document.querySelector('#search-input');
		const searchResults = document.querySelector('#search-results');

		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			const query = searchInput.value.trim();
			if (query !== '') {
				try {
					const response = await fetch(`https://api.example.com/games?query=${query}`);
					const data = await response.json();
					if (data.length > 0) {
						searchResults.innerHTML = `
							<h2>Search Results</h2>
							<ul>
								${data.map(game => `<li>${game.title} (${game.year})</li>`).join('')}
							</ul>
						`;
					} else {
						searchResults.innerHTML = `
							<h2>Search Results</h2>
							<p>No results found.</p>
						`;
					}
				} catch (error) {
					searchResults.innerHTML = `
						<h2>Error</h2>
                    `
                }}})
