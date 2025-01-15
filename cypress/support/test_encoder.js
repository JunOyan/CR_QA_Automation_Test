var base64 = require('base-64');

encoded_log = base64.encode("Test123456!");
console.log(encoded_log);
console.log(base64.decode(encoded_log));