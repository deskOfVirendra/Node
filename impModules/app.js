// Usage of path module

// const path = require('path')
// var pathObj = path.parse(__filename)
// //console.log(pathObj)
// console.log(`Directory : ${pathObj.dir} , BaseName:${pathObj.base} ,Extension:${pathObj.ext} ,FileName : ${pathObj.name}`)


// Usage of Os module

// const os = require('os')
// let freeMemory = os.freemem()
// let totalMemory = os.totalmem()
// console.log(`Total Memory : ${totalMemory}, Free Memory : ${freeMemory}`)

// let userInformation = os.userInfo()
// console.log(userInformation)

// let up = os.uptime()
// console.log(up);


const fs = require('fs')
fs.readdir('../',(err,files) => {
    if(err) throw err
    else console.log(files.toString())
})


fs.copyFile('./package.json',`../baba.json`,(err)=> {
    if(err) throw err
   console.log('File Copied successfully..!')
})

