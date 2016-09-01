
describe('launch CFTO site', function() {

  'use strict';

  it('should add a todo', function() {
        browser.driver.getTitle().then(function(value){
            expect(value).toEqual('M&S Christmas Food');
        });
  });
});
