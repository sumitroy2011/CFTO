
module.exports={
  openUK: function() {
    console.log('inside UK open');
    return browser.driver.get(browser.baseUrl);
  },

  openIE: function() {
    console.log('inside IE open');
    return browser.driver.get(browser.baseUrl);
  }

};
