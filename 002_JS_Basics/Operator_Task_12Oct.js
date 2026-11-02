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

array.at(0);  // first element: 1
array.at(-2); // second-to-last element: 8

console.log(array[array.length - 1]);

// Map vs Filters

Array1=[1,2,3,4,5,6,7,8,9]
MultiplyBy2=Array1.map(n => n * 2)
console.log(MultiplyBy2); 

Filterby2=Array1.filter(n => n>2)
console.log(Filterby2);

console.log(Array1.at(-1));
