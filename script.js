// Asynchronous Programming - 29-08-2025

// const showMessage = (callback)=>{
//     console.log(callback);
// }
// const firstMessage = (callback) =>{
//     setTimeout(() =>{
//         showMessage('Hello');
//         callback();
//     }, 2000)
// }

// const secondMessage = ()=>{
//     showMessage('World!')
// }

// firstMessage(secondMessage);
// secondMessage();

// Promise
// Promise promises us that we will get what we request. It has 3 states showing the status of our request. Pending, Fulfilled and Rejected.

// const promise = new Promise ((resolve, reject) => {
//     const allWentWell= false;

//     if (allWentWell){
//         resolve('All went well')
//     }else{
//         reject('Something went wrong')
//     }
//     const randomNum = Math.floor(Math.random() * 10)
//     console.log(randomNum);
    
//     setTimeout(()=>{
        
//         if (randomNum < 4 ){
//             resolve('Well done!')
//         } else{
//             reject('Oops!, try another time...😔')
//         }
//     }, 2000)
// })

// console.log(promise);

// alert('Hello!');
// const add = 2+2;
// console.log(add);
// document.body.innerHTML replaces the content of the body with whatever input we give it.

// document.body.innerHTML = 'hello';
// Syntax are rules that we have to follow when using a prog. lang. EXACTLY!

//LESSON 1
//(a) Use alert to display 'Good morning' in a popup
// alert('Good morning');
//(b) Display your name in a popup
// alert('My name is Damilare Oyinloye Emmanuel');
//(c) Using math, calculate 10+5 in the console
const add= 10+5;
console.log(add);
//(d) Using math, calculate 20-5 in the console
const sub= 20-5;
console.log(sub);
//(e) Calculate 2+2-5
const math=2+2-5;
console.log(math);
//(f) Use document.body.innerHTML= to display 'Good morning on the web page
// document.body.innerHTML='Good morning';
//(f) Use document.body.innerHTML= Display your name on the web page
// document.body.innerHTML='Damilare Oyinloye Emmanuel';
//Challenge Exercises
//(h) You order a T-shirt for $10, socks for $8, and dinner plates for $20. Use JavaScript to calculate the total cost of your order.
let tshirt=10;
let socks=8;
let dinner_plates=20;

total= tshirt + socks + dinner_plates;
console.log(total);
//(i) Your bank account has $100, you spend $20 on lunch, $50 on dinner, and earn $200 from your job. Calculate how much money you have.
let bank_bal =100;
let lunch =20;
let dinner =50;
let earn =200;

let spent = lunch + dinner;
left = bank_bal - spent; 
total_bal = earn + left;

console.log('I have $' + bank_bal + ', and spent $' + spent + ', leaving me with a balance of $' + left + '. But having earned $' +earn + ', I have $' +total_bal+ ' left.');


let coffee = 5;
let bagel = 3;

math(coffee + bagel)
console.log(math);





