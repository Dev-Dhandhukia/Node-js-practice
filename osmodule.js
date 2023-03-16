const os = require('node:os');
const free=os.freemem()
console.log(`${free /1024 /1024 /1024}`)
// os.freemem()#
// Added in: v0.3.3
// Returns: <integer>
// Returns the amount of free system memory in bytes as an integer.

console.log(os.homedir()) 
// os.homedir()#
// Added in: v2.3.0
// Returns: <string>
// Returns the string path of the current user's home directory.

// On POSIX, it uses the $HOME environment variable if defined. Otherwise it uses the effective UID to look up the user's home directory.

// On Windows, it uses the USERPROFILE environment variable if defined. Otherwise it uses the path to the profile directory of the current user.

console.log(os.hostname()) 
// Added in: v0.3.3
// Returns: <string>
// Returns the host name of the operating system as a string.

console.log(os.platform()) 
// Added in: v0.5.0
// Returns: <string>
// Returns a string identifying the operating system platform for which the Node.js binary was compiled. 
//The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.

// The return  value is equivalent to process.platform.

// The value 'android' may also be returned if Node.js is built on the Android operating system. Android support is experimental.
console.log(os.release()) 
// Added in: v0.3.3
// Returns: <string>
// Returns the operating system as a string.

// On POSIX systems, the operating system release is determined by calling uname(3). 
// On Windows, GetVersionExW() is used. See https://en.wikipedia.org/wiki/Uname#Examples for more information. 

console.log(os.tmpdir())
// os.tmpdir()#
// History
// Returns: <string>
// Returns the operating system's default directory for temporary files as a string.

console.log(os.totalmem())
// os.totalmem()#
// Added in: v0.3.3
// Returns: <integer>
// Returns the total amount of system memory in bytes as an integer.

console.log(os.type())
// os.type()#
// Added in: v0.3.3
// Returns: <string>
// Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.

// See https://en.wikipedia.org/wiki/Uname#Examples for additional information about the output of running uname(3) on various operating systems.

console.log(os.uptime())
// os.uptime()#
// History
// Returns: <integer>
// Returns the system uptime in number of seconds.

console.log(os.version())
// os.version()#
// Added in: v13.11.0, v12.17.0
// Returns <string>
// Returns a string identifying the kernel version.

// On POSIX systems, the operating system release is determined by calling uname(3). On Windows, RtlGetVersion() is used, and if it is not available, GetVersionExW() will be used. See https://en.wikipedia.org/wiki/Uname#Examples for more information.

// OS constants#
// The following constants are exported by os.constants.

// Not all constants will be available on every operating system.

// Signal constants#
// History
// The following signal constants are exported by os.constants.signals. 

console.log(os.EQL)
// os.EOL#
// Added in: v0.7.8
// <string>
// The operating system-specific end-of-line marker.

// \n on POSIX
// \r\n on Windows
// os.availableParallelism()#
// Added in: v19.4.0
// Returns: <integer>
// Returns an estimate of the default amount of parallelism a program should use. Always returns a value greater than zero.

// This function is a small wrapper about libuv's uv_available_parallelism().
console.log(os.arch())

// os.arch()#
// Added in: v0.5.0
// Returns: <string>
// Returns the operating system CPU architecture for which the Node.js binary was compiled.
// Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'.
// The return value is equivalent to process.arch.

// os.constants#
// Added in: v6.3.0
// <Object>
// Contains commonly used operating system-specific constants for error codes, process signals, and so on. The specific constants defined are described in OS constants.

console.log(os.cpus())
// os.cpus()#
// Added in: v0.3.3
// Returns: <Object[]>
// Returns an array of objects containing information about each logical CPU core.

// The properties included on each object include:

// model <string>
// speed <number> (in MHz)
// times <Object>
// user <number> The number of milliseconds the CPU has spent in user mode.
// nice <number> The number of milliseconds the CPU has spent in nice mode.
// sys <number> The number of milliseconds the CPU has spent in sys mode.
// idle <number> The number of milliseconds the CPU has spent in idle mode.
// irq <number> The number of milliseconds the CPU has spent in irq mode.
// [
//   {
//     model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//     speed: 2926,
//     times: {
//       user: 252020,
//       nice: 0,
//       sys: 30340,
//       idle: 1070356870,
//       irq: 0,
//     },
//   },
//   {
//     model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//     speed: 2926,
//     times: {
//       user: 306960,
//       nice: 0,
//       sys: 26980,
//       idle: 1071569080,
//       irq: 0,
//     },
//   },
//   {
//     model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//     speed: 2926,
//     times: {
//       user: 248450,
//       nice: 0,
//       sys: 21750,
//       idle: 1070919370,
//       irq: 0,
//     },
//   },
//   {
//     model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//     speed: 2926,
//     times: {
//       user: 256880,
//       nice: 0,
//       sys: 19430,
//       idle: 1070905480,
//       irq: 20,
//     },
//   },
// ]
// nice values are POSIX-only. On Windows, the nice values of all processors are always 0.

// os.cpus().length should not be used to calculate the amount of parallelism available to an application. Use os.availableParallelism() for this purpose.

// os.devNull#
// Added in: v16.3.0, v14.18.0
// <string>
// The platform-specific file path of the null device.

// \\.\nul on Windows
// /dev/null on POSIX
// os.endianness()#
// Added in: v0.9.4
// Returns: <string>
// Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.

// Possible values are 'BE' for big endian and 'LE' for little endian.



