//creating a ne file
const a=require('fs')
// a.writeFileSync("read.txt","welcome to my channel") 
// a.writeFileSync("read.txt","welcome to my channel abc") 
// a.appendFileSync("read.txt"," welcome back") 
// const b=a.readFileSync("read.txt")
// console.log(b.toString())
a.renameSync("read.txt","read-write.txt") 

// So, what exactly Node.js as a File Server actually means? 
// The Node.js file system module allows you to work with the file system on your computer.

// To include the File System module, use the require() method:
// var fs = require('fs');

// A common use for the File System module:

// Read files
// Create files
// Update files
// Rename files

