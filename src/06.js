const cli = require('caporal')


cli 
    .action((args) => {
        require('dns').lookup(require('os').hostname(), function (err, addressIp, fam) {
            console.log('ip private address : '+addressIp);
          })

    })
cli.parse(process.argv);


