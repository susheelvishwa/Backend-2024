const os = require('os')
// console.log(os.cpus())
// console.log(os.totalmem());

// 1. Getting the Hostname:
console.log("hostname : ", os.hostname());

// 2. Getting the Operating System Platform:
console.log('platform : ', os.platform());

// 3. Getting CPU Architecture:
console.log("Architecture : ", os.arch());

// 4. Getting Network Interfaces:
console.log("Interfaces : ", os.networkInterfaces());

// 5. Getting the Amount of Free System Memory:
console.log("Free System Memory : ", os.freemem());

// 6. Getting the Total Amount of System Memory:
console.log("Total Amount of System Memory : ", os.totalmem());

// 7. Getting the OS Type:
console.log("OS Type : ", os.type());


