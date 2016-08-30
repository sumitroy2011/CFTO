
exports.config = {
  directConnect: true,
  framework: 'jasmine2',
  specs: ['specs/*.js'],
  //baseUrl: 'https://christmasfood.sit2.marksandspencer.com/' ,
params: {
    baseUrl: ''
},
onPrepare: function(){
    switch(browser.params.baseUrl){
      case 'cftouk':
        browser.get("https://christmasfood.sit2.marksandspencer.com/");
        break;
      case 'cftoie':
        browser.get("https://christmasfood.sit2.marksandspencer.ie/");
        break;
      default:
        browser.get("https://christmasfood.sit2.marksandspencer.com/");
 }
}
};
