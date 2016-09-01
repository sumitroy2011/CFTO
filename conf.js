var util=require('./support/util.js');

exports.config = {
  directConnect: true,
  specs: ['specs/*.js'],
  framework: 'jasmine2',
  params: {
    baseUrl: "",
    url: ""
  },


  onPrepare: function(){
    util.onPrepare();
},

};
