const fs=require('fs')
// const path=require('path')
// let c=fs.readFileSync(`${path.dirname("C:/Users/Shree/Desktop/Node js in folder/nodech/read.txt")}/read.txt`,"utf-8")
//console.log(c)
// fs.writeFile("read.txt","welcome back",(err)=>{
//     console.log("File created")
//     console.log(err)
// })
// fs.appendFile("read.txt"," welcome back to my channel",(err)=>{
//     console.log("File created")
//     console.log(err)
// })
fs.readFile("read.txt", "UTF-8" ,(err,data)=>{
    console.log(data)
})


