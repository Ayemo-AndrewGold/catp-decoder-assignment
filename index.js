

//-------------------------- Techbridge assignment Decoder  ---------------

const catFactButton = document.getElementById('get-cat-fact');
const catFactDiv = document.getElementById('cat-fact');

catFactButton.addEventListener('click', async () => {
catFactButton.classList.add('loading');
catFactButton.innerHTML = '<span class="loader"></span> Loading...';

try {
const response = await fetch('https://catfact.ninja/fact');
const data = await response.json();
catFactDiv.innerText = data.fact;
} catch (error) {
console.error('Error fetching cat fact:', error);
catFactDiv.innerText = 'Failed to fetch cat fact.';
} finally {
catFactButton.classList.remove('loading');
catFactButton.innerHTML = 'Get Random Cat Fact';
}
});



