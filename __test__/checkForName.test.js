import 'regenerator-runtime/runtime'
var requestPost = require('../src/client/js/nameChecker')
var validateRequest = requestPost.checkForName;
var httpMocks = require('node-mocks-http');


describe('Test, the function "nameChecker()" throw error if incorrect user inputs' , () => {
    test('nameChecker should throw error if incorrect user inputs', () => {
        const req = httpMocks.createRequest('')
        const res = httpMocks.createResponse();
        
    validateRequest(req);
    
    expect(res.statusCode).toBe(200);
    expect(res._isJSON()).toBeFalsy();
});
})