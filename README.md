mapsapi-signature
====================

Generate correct URL signatures using Secret Key from Google API Console.
Useful for Quota tracking APIs like Streetview Image API.

## READ MORE
	https://developers.google.com/maps/documentation/streetview/get-api-key?hl=en_US

## Install
    npm install mapsapi-signature

## API
```javascript
    var mapsapisignature = require('mapsapi-signature');
    var secrey_key = "12345"
    var _url = 'https://thisisafakeserver1234.test.com/path/this/out?apikey=12345&q=retest';
	var signature = mapsapisignature.getSignature(_url,secrey_key)
	var urlWithSign = _url + '&signature=' + signature

	//OR Directly get the URL with signature
    var mapsapisignature = require('mapsapi-signature');
	var signedUrl = mapsapisignature.getSignedUrl('https://thisisafakeserver1234.test.com/path/this/out?apikey=12345&q=retest','123456')
	console.log({signedUrl:signedUrl});

