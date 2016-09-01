var elementCss=require('./cssSelectors.js');
module.export = {

  getMnsLogo: function() {
    console.log('m here');
    console.log(elementCss.MnsBrandLogo);
    element(by.css(elementCss.MnsBrandLogo));
  }

};
