const conn = require('./connection')
const express = require('express')
const app = express()

app.post('/getStudents',(req,res) => {

    var id = req.query.id 
    conn.connect((err)=> {
        if(err) console.log(err)
        console.log('connected..!')
        let sql = `select * from student where student_id = ${id}`
        conn.query(sql,(err,result,fields)=> {
            if(err) throw err
            res.send(result)
        })
    })
   
})


app.get('/',(req,res) => {
    res.send('welcome to index page')
} )

app.listen(3000)