// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();  // Indicate that the async test is complete
      })
      .catch(err => done(err));  // Pass error to done() if promise is rejected
  });

  it('should not resolve or reject when success is false', function(done) {
    const promise = getPaymentTokenFromAPI(false);

    // Check that the promise does not resolve or reject by setting a short timeout
    let resolved = false;

    promise
      .then(() => {
        resolved = true;
        done(new Error('Promise should not resolve when success is false'));  // Fail the test if it resolves
      })
      .catch(() => {
        resolved = true;
        done(new Error('Promise should not reject when success is false'));  // Fail the test if it rejects
      });

    // Use a setTimeout to check if the promise is still pending after a short duration
    setTimeout(() => {
      if (!resolved) {
        done();  // Pass the test if the promise neither resolved nor rejected
      }
    }, 50);  // Adjust the timeout as needed
  });
});
