const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeesystem'
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employee (name, age, country, position, wage) VALUES (?,?,?,?,?)',
    [name, age, country, position, wage],
    (err, result) => {
        if (err){
            console.log(err);
        }else {
            res.send("Values Inserted");
        }
    }
    )
})

app.get('/employee', (req, res) => {
    db.query('SELECT * FROM employee', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log('Heyy express is working on port 3001');
})