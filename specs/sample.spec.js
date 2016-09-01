
describe('launch CFTO site', function() {

  'use strict';

  var elements=require('../support/pageObjects.js');

  it('should add a todo', function() {
        elements.getMnsLogo();
        browser.driver.getTitle().then(function(value){
            expect(value).toEqual('M&S Christmas Food');
        });
  });
});
