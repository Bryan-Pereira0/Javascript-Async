//API Keys Task 1 Assignment 1
const publicKey = '363ca53c415d19e898d1c6ea482ae29e'
const ts = '1'
const hash = '9c05a32a5ca1c7fa8d234a7f6f8ebf7a'

//Task 2 Assignment 1
async function fetchMarvelCharacters(publicKey, ts, hash){
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    const marvelData = await response.json();
    console.log(marvelData.data.results);
    return marvelData.data.results;
}
//Task 3 Assignment 1
function updateUI(characters){
    const container = document.getElementById('characters')
    container.innerHTML = characters.map(character => `
        <div class = "character">
            <h2>${character.name}</h2>
            <p>${character.description ? character.description : 'no description available'}</p>
            </div>
            `).join('');
}

fetchMarvelCharacters(publicKey, ts, hash).then(updateUI);