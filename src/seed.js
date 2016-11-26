'use strict'

var Todo = require('./models/todo.js');

var todos = [
	'First todo',
	'Second todo',
	'Third todo',
	'Fourth todo'
];

todos.forEach(function(todo, index){
	Todo.find({'name': todo}, function(err, todos){
		if (!err && !todos.length){
			Todo.create({completed: false, name: todo});
		}
	});
});