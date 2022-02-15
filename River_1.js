var r1 = parseInt(readline());
var r2 = parseInt(readline());


while (r1 != r2){
    var riv1 = String(r1).split('').map(str => (Number(str)));
    var riv2 = String(r2).split('').map(str => (Number(str)));
    var riv1sum = 0;
    var riv2sum = 0;
    
    for(let i = 0; i < riv1.length; i++){
        riv1sum += riv1[i];
    }
    for(let n = 0; n < riv2.length; n++){
        riv2sum += riv2[n];
    }

    if(r1 < r2){ 
        r1 = r1 + riv1sum;
    }else{
        r2 = r2 + riv2sum;
    }
}
console.log(r1);
 