{
  let a = 100;

  console.log(a++ + ++a + a++ + ++a);
  console.log(a);
}
//Section A Answe: 408 &
{
  let a = 37;

  console.log(-a + a--);
  console.log(a);
}
//Section B Answe: 0 & 36
{
  let a = 5;
  let b = a-- - --a;
  console.log(b, a);
}

//Section C Answe: 2 & 3

{
  let i = 1;

  let r = i++ > 1 ? i++ : ++i;
  console.log(r, i);
}

//Section D Answe: 3 & 3
let array=[1,2,3]
array.splice(1,0,4,5,6)
console.log(array);

array.pop()
console.log(array);

array.push(7,8,9)
console.log(array);

console.log(array.at(-1));


