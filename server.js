const express = require( 'express' );
const app = express();
const knex = require( 'knex' );
const bodyParser = require( 'body-parser' );
const jsonParser = bodyParser.json();

const database = knex({
    client : 'pg',
    connection : 'postgresql://sportuser@localhost/sports'
})

app.get( '/api/getAllSports', ( req, res ) => {

    database
        .select('*')
        .from('sport')
        .then( sports => {
            return res.status(200).json(sports);
        })
        .catch( error => {
            res.statusMessage = "Check your DB!";
            return res.sendStatus(500).send("Something went wrong with the database!");
        });

});

app.post( '/api/newSport', jsonParser, ( req, res ) => {

    console.log( req.body );

    let newSport = {
        id : Number(req.body.id),
        name : req.body.name,
        numplayers : Number(req.body.numplayers) 
    };

    database
        .insert( newSport )
        .into( 'sport' )
        .returning('*')
        .then( sport => {
            return res.status(201).json(sport);
        })
        .catch( error => {
            res.statusMessage = "Check your DB!" + error;
            return res.sendStatus(500).send("Something went wrong with the database!");
        });
})

app.listen( 8080, () => {
    console.log( "Your server is running in port 8080." );
});