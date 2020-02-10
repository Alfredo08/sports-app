<h1>
    This app uses a PostgreSQL Database with one table.
</h1>

<p> 
    Database name : <b> sports </b>
</p>
<p> 
    Role name : <b> sportuser </b>
</p>


<p>
    Script for table :
</p>
<div>
CREATE TABLE sport( <br>
	id INTEGER PRIMARY KEY NOT NULL,<br>
	name TEXT,<br>
	numplayers INTEGER<br>
);<br>
<br>

INSERT INTO sport(id, name, numplayers) VALUES(123, 'Basketball', 5);<br>

</div>

<h2>
    Don't forget to run <b> npm install </b> previous to <b> npm start </b>
</h2>