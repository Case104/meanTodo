'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err){
	if (err){
		console.warn('Failed connecting to mongodb', err);
	} else {
		console.log('Successfully connected to mongodb');
	}
});