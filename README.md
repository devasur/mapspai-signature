mapsapi-signature
====================

Generate correct URL signatures using Secret Key from Google API Console.
Useful for Quota tracking APIs like Streetview Image API.

Generate a signature from a private key and a string:


    var mapsapisignature = require('mapsapi-signature');
	var secret = mapsapisignature.getSignature('https://thisisafakeserver1234.test.com/path/this/out?apikey=12345&q=retest','123456')
	console.log({secret:secret});
	var signedUrl = mapsapisignature.getSignedUrl('https://thisisafakeserver1234.test.com/path/this/out?apikey=12345&q=retest','123456')
	console.log({signedUrl:signedUrl});

