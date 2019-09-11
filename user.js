var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017';

module.exports = {
     register: function(name, email, password){
       MongoClient.connect(url, (error, client) => {
       	const db = client.db('Blog');
		  	db.collection('user').insertOne( {
				"name": name,
				"email": email,
				"password": password
			},function(err, result){
				assert.equal(err, null);
		    	console.log("Saved the user sign up details.");
			});
		});
    }
}