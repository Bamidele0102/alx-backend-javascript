// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('should log the correct total when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct total when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
