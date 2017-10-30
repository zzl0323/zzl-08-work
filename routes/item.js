var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '182325',
    database:'item2'
});
/* GET home page. */
router.get('/erji', function(req, res, next) {
    connection.query('SELECT id,erji,list FROM work', function(err, rows, fields) {
    	res.header('Access-Control-Allow-Origin',"*")
        if (err) throw err;
        	res.send(rows);
    });
});
router.post('/detail', function(req, res, next) {
	var id = req.body.abc;
	if(id=='zzl'){
		connection.query('SELECT id,erji,list FROM work', function(err, rows, fields) {
	    	res.header('Access-Control-Allow-Origin',"*")
	        if (err) throw err;
	        res.send(rows);
    	});
	}else{
		connection.query('SELECT id,erji,list,detail FROM work where id='+id, function(err, rows, fields) {
	        res.header('Access-Control-Allow-Origin',"*")
	        if (err) throw err;
	        res.send(rows);
	    });
	}
	
});

module.exports = router;
