//creating a ne file
const a=require('fs')
// a.writeFileSync("read.txt","welcome to my channel") 
// a.writeFileSync("read.txt","welcome to my channel abc") 
// a.appendFileSync("read.txt"," welcome back") 
// const b=a.readFileSync("read.txt")
// console.log(b.toString())
a.renameSync("read.txt","read-write.txt")