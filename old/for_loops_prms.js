// Q1. Print the sum of even & odd numbers within a specified range.
var s = Number(prompt(`Enter the range starting point: `))
var e = Number(prompt(`Enter the ragne end point: `))
var sum_even = 0
var sum_odd = 0

for(let i = s; i <= e; i++){
    if (i % 2 == 0) sum_even += i
    else sum_odd += i
}
document.write(`Sum of all even number with in the range is ${sum_even}<br>
Sum of all the odd numbers within the range is ${sum_odd}.`)

// Q2. Print the factiorial of any number.
var num = Number(prompt(`Enter the number to find it's factorail: `))
var factiorial = 1

for(let i = 1; i <= num; i++) factiorial *= i
document.write(`<br>The factorial of ${num} is ${factiorial}<br>`)

// Q3. Check whether a number is perfect number or not.
var num = Number(prompt(`Enter the number to check if is a Perfect Number or not: `))
var sum = 0
for(let i = parseInt(num/2); i > 0; i--) (num % i == 0)?sum += i: sum += 0
sum == num?document.write(`${num} is a Perfect Number`):document.write(`${num} is not a Perfect Number`)

// Q4. Check whether a number is prime number or not.
var num = Number(prompt(`Enter the number to check if it Prime number or not: `))
for(var i = parseInt(num/2); i > 1; i--){
    if (num % i == 0) break
} 
i == 1? document.write(`${num} is a Prime Number`):document.write(`${num} is not a Prime Number`)
