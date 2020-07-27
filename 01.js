const cli = require('caporal')


cli
    .action((args) => {
        const str = 'I aM CrAzY TeXT'

        const strUpper = str.toLocaleUpperCase()
        const strLower = str.toLocaleLowerCase()     
        const strCap   = strLower.replace(/\b\w/g, l => l.toUpperCase())
        console.log(strUpper);
        console.log(strLower);
        console.log(strCap);
})
cli.parse(process.argv);
