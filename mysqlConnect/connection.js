const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'virubaba',
    database: 'dummy_school'
})

module.exports = conn