
module.exports={


  onPrepare: function() {

      var width = 1300;
      var height = 1200;
      browser.driver.manage().window().setSize(width, height);

      //get required url

      switch(browser.params.baseUrl){
        case 'UK':
           browser.params.url = "https://christmasfood.marksandspencer.com/";
          break;
        case 'IE':
           browser.params.url = "https://christmasfood.marksandspencer.ie/";
          break;
        default:
          browser.params.url = "https://christmasfood.marksandspencer.com/";
   }

      // get url
        browser.driver.get(browser.params.url);
  }
};
