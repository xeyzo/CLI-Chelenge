const cli = require('caporal')

cli
    .action((args) => {

    function reverse(param){
        var x = param.length, y = '';
        while(x > 0){
        y += param[x - 1];
        x--;
        }
        return y;
    }
    const kata = "kasur ini rusak";
    if(kata === reverse(kata)){
    console.log("kalimat `"+kata+"` is palindrom ? yes.");
    }
    else{
    console.log("kalimat `"+kata+"` is palindrom ? no");
    }
})
cli.parse(process.argv);
