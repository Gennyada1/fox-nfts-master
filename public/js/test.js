function ArrayChallenge(arr, n)
{
    let lis = Array(n).fill(0);
    let i, j, max = 0;
 
    // Get the list
    for(i = 0; i < n; i++)
        lis[i] = 1;
 
    // Complier
    for(i = 1; i < n; i++)
        for(j = 0; j < i; j++)
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1)
                lis[i] = lis[j] + 1;
 
    // Pick maximum of all LIS values
    for(i = 0; i < n; i++)
        if (max < lis[i])
            max = lis[i];
 
    return max;
}
 
let arr = [ 9,9,4,2 ];
let n = arr.length;
console.log("Length of list is " + ArrayChallenge(arr, n) + "\n");

const mainElId = "border1";
const mainEl = document.getElementById(mainElId);
let data = {};
mainEl.querySelectorAll('*').forEach(n => {
  data[n.getAttribute('id')] = n.innerText;
  n.remove();
}
);
data[mainElId] = mainEl.innerText;
console.log(data);

var _gt = Math.max(...[1, 1, 1, -5])
var ars = [1, 1, 1, -5].filter(function(items){
    return _gt === items
}).reduce(function(acc, curr){
    acc += curr
    return acc
}, 0);

console.log(ars);

function maxElement(arrs){
    var max = Math.max(...arrs)
    var count = arrs.filter(el=> el == max).length
    return {max: max, items:Array(count).fill(max), sum: max * count}
}

console.log(maxElement([4, 5, -2, 3, 1, 2, 6, 6]));

var argx = [4, 5, -2, 3, 1, 2, 6, 6]
var max = argx[0], total = 0
argx.filter((a)=>{
    console.log(a);
    if(a==max){
        total += max
    }else if(a>max){
        max = total = a
    }
})

console.log(total);