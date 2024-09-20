/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let doubledigit=[]
    let singledigit=[]
for(let elements of nums){
    if(elements>=10){
        
        doubledigit.push(elements);
    }else{
singledigit.push(elements);
    }
}
let x=doubledigit.reduce((accu,ele)=>accu+ele,0);
let y=singledigit.reduce((accu,ele)=>accu+ele,0);
return x>y || y>x;
};