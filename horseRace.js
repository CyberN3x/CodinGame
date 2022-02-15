const N = parseInt(readline());
let pi = [];
function findDiff(arr, n){
     arr.sort((a, b) => a-b)
     let diff = Number.MAX_VALUE;
     for(let i = 0; i < n-1 ; i++){          
          if(arr[i + 1] - arr[i] < diff){
               diff = arr[i+1] - arr[i];
          }
     }
     return diff;
}
for (let i = 0; i < N; i++) {
     pi[i] = parseInt(readline());
}

console.log(findDiff(pi, N))