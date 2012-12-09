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