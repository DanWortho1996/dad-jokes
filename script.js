const jokeEl = document.getElementById('joke');
const nextBtn = document.getElementById('nextBtn');

async function getJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json' }
  });
  const data = await res.json();
  jokeEl.textContent = data.joke;
}

nextBtn.addEventListener('click', getJoke);

//Loads the first joke on page load
getJoke();
