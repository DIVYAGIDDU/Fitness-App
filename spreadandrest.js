//spread and rest operstor
function Add(a,b,c,...others){
    console.log(others[0])
return a+b+c;
}
const rest=Add(1,2,3,4,5)
console.log(rest)