const path = require('node:path');
const a1=path.basename('C:\\temp\\myfile.html');
const a2=path.dirname('C:\\temp\\myfile.html');
const a3=path.extname('index');
// const a4=path.format({
//     root: '/',
//     name: 'file',
//     ext: ' txt',
//   });
  const a4=path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt',
  });
  
console.log(a1)
console.log(a2) 
console.log(a3)
console.log(a4)

//path.delimiter 
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

// path.dirname(path)#
// History
// path <string>
// Returns: <string>
// The path.dirname() method returns the directory name of a path, similar to the Unix dirname command. Trailing directory separators are ignored, see path.sep.


// A TypeError is thrown if path is not a string.
console.log( path.dirname('/foo/bar/baz/asdf/quux'));
// // Returns: '/foo/bar/baz/asdf')

// path.extname(path)#
// History
// path <string>
// Returns: <string>
// The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path (see path.basename()) , an empty string is returned.

console.log(path.extname('index.html'));
// // Returns: '.html'

console.log(path.extname('index.coffee.md'));
// // Returns: '.md'

console.log(path.extname('index.'));
// // Returns: '.'

console.log(path.extname('index'));
// // Returns: ''

console.log(path.extname('.index'));
// // Returns: ''

console.log(path.extname('.index.md'));
// // Returns: '.md'
// A TypeError is thrown if path is not a string. 


//path.format(pathObject)
// pathObject <Object> Any JavaScript object having the following properties:
// dir <string>
// root <string>
// base <string>
// name <string>
// ext <string>
// Returns: <string>
// The path.format() method returns a path string from an object. This is the opposite of path.parse().

// When providing properties to the pathObject remember that there are combinations where one property has priority over another:

// pathObject.root is ignored if pathObject.dir is provided
// pathObject.ext and pathObject.name are ignored if pathObject.base exists 
console.log(path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt',
    
  })); 


//   path.isAbsolute(path)#
// Added in: v0.11.2
// path <string>
// Returns: <boolean>
// The path.isAbsolute() method determines if path is an absolute path.

// If the given path is a zero-length string, false will be returned.
/*path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false
A TypeError is thrown if path is not a string.



path.join([...paths])#
Added in: v0.1.16
...paths <string> A sequence of path segments
Returns: <string>
The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'*/
const a=path.extname(__filename)
console.log(__filename)



