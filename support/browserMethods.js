
module.exports={
  getTitle: function() {
    console.log('inside getTitle');
    return browser.driver.getTitle();
  }
};
