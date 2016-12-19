mapsapi-signature
====================

Generate correct URL signatures using Secret Key from Google API Console.
Useful for Quota tracking APIs like Streetview Image API.

## READ MORE
[Google Developer Docs](https://developers.google.com/maps/documentation/streetview/get-api-key?hl=en_US)
[Streetview Image API](https://developers.google.com/maps/documentation/streetview/intro)

## Install
    npm install mapsapi-signature

## API
```javascript
    var mapsapisign = require('mapsapisign');
    var secrey_key = "jx4xM1nvjyK6MPA7nQrKe__seOM="
    var _url = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=YOUR_API_KEY';
	var signature = mapsapisign.getSignature(_url,secrey_key) //F86CrZMBDc_ARsm56Jv1c87z48M=
	var urlWithSign = _url + '&signature=' + signature

	//OR Directly get the URL with signature
    var mapsapisign = require('mapsapisign');
	var signedUrl = mapsapisign.getSignedUrl(_url,secrey_key')
	console.log({signedUrl:signedUrl});
	//https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=YOUR_API_KEY&signature=F86CrZMBDc_ARsm56Jv1c87z48M=

