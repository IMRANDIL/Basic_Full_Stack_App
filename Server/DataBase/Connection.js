const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: process.env.PASS,
    database: 'Basic_Full_Stack_App',
    multipleStatements: true
});


connection.connect((err) => {
    if (err) throw err;
    console.log(`Database Connected`);
})



module.exports = connection;