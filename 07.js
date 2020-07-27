const cli = require('caporal')


cli 
    .action((args) => {
        'use strict';
 
    const getIP = require('external-ip')();
 
    getIP((err, ip) => {
        if (err) {
        throw err;
    }
    console.log(ip);
});

    })
cli.parse(process.argv);


