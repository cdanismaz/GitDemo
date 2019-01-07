N=7;
var x = " *";
for(var i=0; i<N; i++ ) {
    for(var j=0; j<i; j++) {
        console.log(x);
        x = x + "*"
    }
    //console.log("\n");
}
