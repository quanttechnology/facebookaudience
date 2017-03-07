/**
 * Created by kraisorna on 3/7/2017 AD.
 */
var request = require('request');
var formData = {
    // Pass a simple key-value pair
    name: 'My new CA',
    subtype: 'CUSTOM',
    description: 'People who bought from my website',
    access_token: '<ACCESS_TOKEN>'
};

request.post({url:'https://graph.facebook.com/v2.8/act_<AD_ACCOUNT_ID>/customaudiences', formData: formData}, function optionalCallback(err, res, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log(body);
});
