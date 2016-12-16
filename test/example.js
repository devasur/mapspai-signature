var mapsapisignature = require('../index.js');
var secret = mapsapisignature.getSignature('https://thisisafakeserver1234.test.com/path/this/out?apikey=12345&q=retest','123456')
console.log({secret:secret});
var signedUrl = mapsapisignature.getSignedUrl('https://thisisafakeserver1234.test.com/path/this/out?apikey=12345&q=retest','123456')
console.log({signedUrl:signedUrl});