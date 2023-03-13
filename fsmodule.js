const fs=require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// }) 
// const a=fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("I am node js")

// fs.writeFile('file2.txt',"This is file two",()=>{
//     console.log("Finished reading file")
// }) 
const b=fs.writeFileSync('file2.txt',"This is file two 3") 
console.log(b)
console.log("work done")
