let a=[1,2,3,4]
console.log(a)
console.log(a.splice(1,2))

console.log(a.pop())
a.push(7,20,26,28,19,11)

console.log(a)
function find(x){
    return x>5
};
const output=a.filter(find);
console.log(output);

function 