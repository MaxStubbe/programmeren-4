//
// ./api/routes_v2.js
//
var express = require('express');
var router = express.Router();
var recipes = require('./recipes')

var mijnObject = { 
	message: 'Hallo en welkom op api versie 2!',
};

router.get('', function(req, res){
	console.log('aangeroepen.');
    res.status(200);
	res.json(mijnObject);
});

router.get('/info', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({ 'tekst': 'Dit is de 2e api versie, vervolg op de 1e versie'});
});

router.get('/recipes', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json(recipes);
})

// Hiermee maken we onze router zichtbaar voor andere bestanden. 
module.exports = router;