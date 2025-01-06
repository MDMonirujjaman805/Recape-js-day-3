function doMath(nam1,nam2){
  const sum = nam1+nam2;
  const min = nam1-nam2;
  const mul = sum*min;
  const div = mul/2;
  return div;
};

const mathResult = doMath(65,32);
console.log(mathResult);

const sum = doMath(65,32);
console.log(sum);

function doMath(nam1,nam2){
  const sum = nam1+nam2;
  const total = sum;
  return total;
};
const bill = doMath(88,65);
console.log(bill);

function isEven(nam1){
  if(nam1 % 2 == 0){
    return true;
  }
  return false;
};
const even = isEven(4);
console.log(even);

function isOdd(nam1){
  if(nam1 % 2 != 0){
    return true;
  }
  return false;
};  

const odd = isOdd(2);
console.log(odd);


function age(sub1,sub2,sub3){
  const total = sub1+sub2+sub3;
  return total;
};
const agees = {
  father:65,
  soon1:20,
  soon2:15
};
const ageResult = age(agees.father,agees.soon1,agees.soon2);
console.log(ageResult);



function age(sub1,sub2,sub3){
  const total = sub1+sub2+sub3;
  return total;
};    
const agees2 = [65,20,15,65,92,87,56,23,56,];
console.log(agees2[6]);







