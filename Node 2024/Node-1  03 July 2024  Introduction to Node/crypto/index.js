// 1 Generating Hashes:

// const crypto = require("crypto");
// const hash = crypto.createHash("sha256").update("password").digest("binary");
// console.log(hash);


// 2. Creating HMAC:

// const crypto = require("crypto");
// const hmac = crypto
//   .createHmac("sha256", "a secret key")
//   .update("password")
//   .digest("hex");
// console.log(hmac);


// 3. Encrypting Data:

// const crypto = require("crypto");
// const algorithm = "aes-192-cbc";
// const password = "Password used to generate key";
// // Key length is dependent on the algorithm. In this case for aes192, it is 24 bytes (192 bits).
// // Use async key derivation in real applications!
// const key = crypto.scryptSync(password, "salt", 24);
// const iv = Buffer.alloc(16, 0);
// // Initialization vector.

// const cipher = crypto.createCipheriv(algorithm, key, iv);

// let encrypted = cipher.update("some clear text data", "utf8", "hex");
// encrypted += cipher.final("hex");
// console.log(encrypted);

// Asynchronous
const {
  randomBytes,
} = require('node:crypto');

randomBytes(2, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});
