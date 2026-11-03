const sum1=(a,b)=>a+b;
console.log(sum1(5,10));

const sum2=(a,b)=>{
    return a+b;
}   
console.log(sum2(5,10));

const greatThePerson=(Name)=>`Hello, ${Name}!`;
console.log(greatThePerson("Alice"));

const greatThePerson2=(Name,Age)=>{
    return `Hello, ${Name}! You are ${Age} years old.`;
}
console.log(greatThePerson2("Bob", 25));