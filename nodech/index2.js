const a=require('fs')
// a.mkdirSync('dev')
// a.writeFileSync("dev/bio.txt","Welcome back")
//a.appendFileSync("dev/bio.txt"," Back") 
// const fs = require("fs"); // Or `import fs from "fs";` with ESM
// if (fs.existsSync('dev')) {
//     fs.appendFileSync("dev/bio.txt"," 1") 
// }
// else{
//     fs.writeFileSync("dev/bio.txt","Welcome back")   
// }
// const c=fs.readFileSync("dev/bio.txt","utf-8")
// console.log(c)
//a.renameSync("dev/bio.txt","dev/Bio.txt") 
// a.unlinkSync("dev/Bio.txt")
//a.rmdirSync("dev")
a.writeFile("./file.txt/","Welcomme to my channel",(err)=>{
    console.log("file created")
})