import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit (e) {
	e.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	//1- UI lanza una ACTION en evento submit que es recogida por el REDUCER
	store.dispatch({
		type: 'ADD_SONG',
		payload: {title} //title: title
	})
}

const initialState = [
	{ "title": "Despacito" },
	{ "title": "One more time" },
	{ "title": "Echame la culpa" }
]

//2- El reducer recoge el state y la acción
const reducer = function(state, action) {
	switch (action.type) {
		case 'ADD_SONG':
			//3- El reducer actualiza el State
			return [...state, action.payload]
		default:
			return state
	}
}

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render() {
  const $container = document.getElementById('playlist');
  const playlist = store.getState();
  $container.innerHTML = '';
  playlist.forEach(el => {
    const template = document.createElement('p');
    template.textContent = el.title;
    $container.appendChild(template);
  })
}

render();

function handleChange() {
  render();
}

store.subscribe(handleChange)
