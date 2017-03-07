/**
 * Created by kraisorna on 3/7/2017 AD.
 */
var request = require('request');
var formData = {
    // Pass a simple key-value pair
    name: 'My new CA',
    subtype: 'CUSTOM',
    description: 'People who bought from my website',
    access_token: 'EAASyCucqJ8IBALAStRpmGSRgTqL46S2Lpd5RMaLVArgJlKhZC3dJkxjCKtxR5O811usGxDrkA5l0M4PuBkUpgiDL5pRZAYZC6qZCOCY0o3eIyPMLlfqkKPK9Fk5Bvf9fb12MCEQAoGDTUZAYvmPeFQklSygSw3oRQsrZA7Ej5ZAsAZDZD'
};

request.post({url:'https://graph.facebook.com/v2.8/act_1384318948520536/customaudiences', formData: formData}, function optionalCallback(err, res, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log(body);
});