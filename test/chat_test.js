var expect = require('expect.js'),
Browser = require('zombie'),
browser = new Browser();

describe('Load index', function(){
  describe('#title', function() {
    it('should be Chat', function(done){
      browser.visit('http://localhost:3000', function () {
        expect(browser.text('title')).to.equal('Chat');
        done();
      });
    });
  });
});

describe('Chat', function() {
  describe('#broadcast', function() {
    it('should send message', function(done) {
      browser.visit('http://localhost:3000', function() {
        browser.fill('#chat-input', 'message');
        browser.pressButton('Send Message', function() {
          expect(browser.text('#chat-messages')).to.be('message');
          done();
        });
      });
    });
  });
});