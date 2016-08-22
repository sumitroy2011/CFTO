
describe('launch CFTO site', function() {

  'use strict';

  var hook= require('../support/openHook.js');
  var browserMethods=require('../support/browserMethods.js')
  var page;

  it('should add a todo', function() {
    hook.openIE().then(function() {
        browser.driver.getTitle().then(function(value){
            console.log('value');
            expect(value).toEqual('M&S Christmas Food');
        });
    });
  });
});
