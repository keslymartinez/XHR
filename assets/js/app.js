

const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchForText;



form.addEventListener('submit', function (e) {
	e.preventDefault();
	responseContainer.innerHTML = '';
	searchedForText = searchField.value;
	getNews();
});

function getNews(){
	const articleRequest = new XMLHttpRequest();
	articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchForText}&api-key=43f37e57081647dd8d6086b7c605ba37`);
	articleRequest.onload = addNews;
	articleRequest.onerror = handleError;
	articleRequest.send();
}
function handleError(){
	console.log('se ha presentado un error');
}

function addNews(){
	const data = JSON.parse(this.responseText);
	const articles = data.response.docs;
	articles.forEach(article => {
	const title = article.headline.main;
	const snippet = article.snippet;


	let li = document.createElement('li');
	li.className = 'articleClass';
	li.innerText = snippet;
	responseContainer.appendChild(li);
});

}


