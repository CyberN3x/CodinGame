const MESSAGE = readline();

var final = "";
var pre = -1;

for(let i =0; i < MESSAGE.length; i ++){
    
    for(var j = 6; j >=0; j--){
        
        let bin = MESSAGE.charCodeAt(i) >> j & 1;
        if (bin !== pre){
            if(-1 !== pre){
                final += " ";
            }
            final+= 1 == bin ? "0 " : "00 ";
            pre = bin;  
        }
        final += "0";
    }
}

console.log(final);
