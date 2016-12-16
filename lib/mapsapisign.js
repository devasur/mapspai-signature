//
// by Boni Gopalan
// December 2016
//
// MIT Licence

"use strict";

/* Generate a Google Signature in Node.js  */
var url = require('url');
function computeSignature(secret, payload) {
    var signature =
        new Buffer(
            require('crypto')
            .createHmac('sha1', secret)
            .update(payload)
            .digest('base64'))
        .toString()
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    while (signature.length % 4) {
        signature += '=';
    }
    return signature;
}
/**
 * @param {string} requestUrl
 * @param {string} secret
 * @return {string}
 */
exports.getSignedUrl = function(requestUrl,secret){
    var signature = exports.getSignature(requestUrl,secret)
    requestUrl += '&signature=' + encodeURIComponent(signature);
    return requestUrl;
}

/**
 * @param {string} requestUrl
 * @param {string} secret
 * @return {string}
 */
exports.getSignature = function(requestUrl,secret){
    if(requestUrl.indexOf('//') == 0) requestUrl = 'http:' + requestUrl;
     var secret = new Buffer(secret, 'base64');
     var payload = url.parse(requestUrl).path;
     var signature = computeSignature(secret, payload);
     return signature
}
