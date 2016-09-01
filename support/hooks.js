

module.exports={

//method to open the site
  openSite: function() {
    return browser.driver.get(browser.params.url);
  }
};
