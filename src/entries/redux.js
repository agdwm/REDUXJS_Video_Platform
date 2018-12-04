import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit (e) {
	e.preventDefault();
	// 'FormData' is a Native Browser's Api that will receive by param a DOM element.
	// FormData will save the data of the form in order we can serialize them or send them to the server.
	const data = new FormData($form);
	const title = data.get('title');
	console.log(title);
}

const initialState = [
	{
		"title": "Despacito"
	},
	{
		"title": "One more time"
	},
	{
		"title": "Echame la culpa"
	}
]

const store = createStore(
	(state) => state,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $container = document.getElementById('playlist');
const playlist = store.getState();
playlist.forEach(el => {
	const template = document.createElement('p');
	template.textContent = el.title;
	$container.appendChild(template);
})

console.log(store.getState())