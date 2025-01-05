// wthout stored value return function
function function1(nam1,nam2){
  const sum = nam1+nam2;
  console.log("sum is :",sum);
  return sum;
};
function1(65,32);


function returnMe(nam1){
  const namber = nam1*5;
  console.log("squre is :",namber);
  return namber;
}
returnMe(5);

// returnMe(18);
// returnMe(23);
// returnMe(65);

// stored value return function
function function2(nam1,nam2){
  const min = nam1-nam2;
  return min;
};
const result = function2(65,32);
console.log("min is :",result);


let parson = {  
  name:'Monir',
  age:23,
  adderes:'gazipur'
}
console.log(parson);
 
let parson2 = {
  area:'chandpur',
  gender:'male',
  phone: '01850847585',
  email:'monirbinkhaled1@gmail.com'
}
console.log(parson2);
