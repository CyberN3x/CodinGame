const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
const temp = [];
var closest = 5526;
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    temp.push(t)
} 
if (n == 0){
    console.log(0);
}else {
    for(let j = 0; j < n; j++){
        var T = temp[j]   
        if (Math.abs(T) < Math.abs(closest)){
            closest = T;
        }else if(Math.abs(T) == Math.abs(closest)){
            closest = Math.max(closest, T);
        }
    }
    console.log(closest);
    }
       
   






