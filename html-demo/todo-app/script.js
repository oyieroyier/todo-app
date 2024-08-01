/* eslint-disable no-unused-vars */
const todos = [
	{
		id: 1,
		title: 'Learn JavaScript Functions',
		completed: false,
	},
	{
		id: 2,
		title: 'Learn JavaScript Array Methods',
		completed: true,
	},
	{
		id: 3,
		title: 'Learn JavaScript Object Methods',
		completed: false,
	},
	{
		id: 4,
		title: 'Learn JavaScript DOM Manipulation',
		completed: true,
	},
	{
		id: 5,
		title: 'Learn JavaScript Events',
		completed: false,
	},
];

document.addEventListener('DOMContentLoaded', () => fetchAllTodos(todos));

const todosContainer = document.querySelector('.todos-container');

function fetchAllTodos(todosList) {
	todosContainer.innerHTML = '';
	todosList.map(createSingleTodoItem);
}

function createSingleTodoItem(todo, index) {
	const singleTodo = document.createElement('div');
	singleTodo.className = 'todo';

	const checkBoxAndAddedTodo = document.createElement('div');
	checkBoxAndAddedTodo.className = 'todo-item';
	checkBoxAndAddedTodo.innerHTML = `
    <label class="hamburger">
        <input type="checkbox"/>
        <svg viewBox="0 0 32 32" onclick="markAsRead(${index})">
            <path class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path class="line" d="M7 16 27 16"></path>
        </svg>
    </label>
    <p>${todo.title}</p>
`;

	singleTodo.appendChild(checkBoxAndAddedTodo);

	const actionButtons = document.createElement('div');
	actionButtons.className = 'flex-container';
	actionButtons.innerHTML = `
	<button class="button" onclick='showEditModal(${index})'>Edit</button>
	<button class="delete-button" onclick='deleteTodo(${index})'>Delete</button>
	`;

	singleTodo.appendChild(actionButtons);

	todosContainer.appendChild(singleTodo);
}

function markAsRead(index) {
	const todo = todos[index];
	todo.completed = !todo.completed;
	const todoText = document.querySelectorAll('.todo-item p')[index];
	todoText.classList.toggle('completed');
}

function showEditModal(index) {
	const modal = document.createElement('dialog');
	modal.id = 'edit-todo-modal';
	modal.innerHTML = `
		<div class="flex-container">
			<h2>Edit Todo</h2>
			<button class="delete-button">Close</button>
		</div>

		<form class="edit-todo">
			<input class="input" type="text" value="${todos[index].title}" />
			<button class="button">Save</button>
		</form>
	`;

	document.body.appendChild(modal);
	modal.showModal();

	const editTodoForm = document.querySelector('.edit-todo');
	editTodoForm.addEventListener('submit', (e) => editTodo(e, index));

	const closeButton = document.querySelector('dialog .delete-button');
	closeButton.addEventListener('click', () => {
		modal.close();
		modal.remove();
	});
}

function editTodo(e, index) {
	e.preventDefault();
	const newTitle = e.target[0].value;
	todos[index].title = newTitle;
	fetchAllTodos(todos);

	// Remove the modal from the UI:
	e.target.parentNode.close();
	e.target.parentNode.remove();
}

function deleteTodo(index) {
	todos.splice(index, 1);
	fetchAllTodos(todos);
}

// Add a new item.
const form = document.querySelector('form');
form.addEventListener('submit', addNewTodo);

function addNewTodo(e) {
	e.preventDefault();
	const inputValue = e.target[0].value;
	const newTodo = {
		id: todos.length + 1,
		title: inputValue,
		completed: false,
	};

	todos.push(newTodo);
	fetchAllTodos(todos);
	form.reset();
}
