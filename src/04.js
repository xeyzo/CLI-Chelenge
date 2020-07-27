const cli = require('caporal')
const md5 = require('md5')
cli
    .action((args) => {
     const str = 'email@example.com';
     
     console.log(md5(str));

     
    
})
cli.parse(process.argv);
