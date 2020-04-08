
const Mocha = require('mocha');
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './doc/mochawesome-reporter'
  }
});
mocha.addFile('./src/serviceTest/mochaTest.spec.js');
mocha.run(function(err){
  if(err){
    process.exit(1);
  } else {
    console.log('all success');
    process.exit(0);
  }
})