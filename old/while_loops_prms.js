// // Q1. Print the sum of odd & even number within a range.
// var s = Number(prompt(`Enter the starting point of range: `))
// var e = Number(prompt(`Enter the end point of range:`))
// var sum_even = 0
// var sum_odd = 0

// while(s <= e){
//     s % 2 == 0?sum_even += s: sum_odd += s
//     s++
// }
// document.write(`Sum of even numbers is ${sum_even}<br>
// Sum of odd numbers is ${sum_odd}`)

// // Q2.  Count even & odd digits in a number.
// var num = Number(prompt(`Enter the number to calculate the nnumber of it's even & odd digits: `))
// var even_count = 0
// var odd_count = 0
// while(num != 0){
//     let r = num % 10
//     r % 2 == 0?(even_count++):(odd_count++)
//     num = parseInt(num / 10)
// }
// document.write(`<br>The number of Even digits are ${even_count}<br>
// The number of Odd digits  are ${odd_count}`)

// // Q3. Reverse a number.
// var num = Number(prompt(`Enter the Number to reverse it's digits: `))
// var reverse_num = 0

// while(num !=0){
//     reverse_num *= 10
//     reverse_num += num % 10 
//     num = parseInt(num/10)
// }
// document.write(`Reverse of number is ${reverse_num}`)

// // Q4. Check wether a number is Neon number or not.
// var num = Number(prompt(`Enter the number to check if it a Neon number or not: `))
// var sum = 0
// var sqr = num**2

// while(sqr != 0){
//     sum += sqr % 10
//     sqr = parseInt(sqr / 10)
// }
// sum == num?document.write(`<br>${num} is a Neon number.`):document.write(`<br>${num} is not a Neon number.`)

// // Q5. Check wether a number is Armstrong or not.
// var str = prompt(`Enter the number to check if it is an Armstorng number or not: `)
// var digits = str.length
// var num = parseInt(str)
// var sum = 0
// while(num > 0){
//     sum += parseInt((num % 10))**digits
//     num = parseInt(num / 10)
// }
// (sum == str)?document.write(`${str} is an Armstrong number`):document.write(`${str} is not an Armstrong number`)

// // Q6. Check wether a number is Pallindrome or not.
// var str = prompt(`Enter a number to check if it is a palindrome number or not: `)
// var rev = str.split('').reverse().join('')
// str == rev?document.write(`${str} is a Palindrome number`):document.write(`${str} is not a Palindrome number`)

// Q7. Check wether a number is Magical or not.
var num = Number(prompt(`Enter a number to check if it a Magical number or not: `))
var digits_sum = 0
var temp = num
while(temp > 0){
    digits_sum += parseInt(temp % 10)
    temp = parseInt(temp / 10)
}
rev_digits_sum = toString(digits_sum)
num == (digits_sum * parseInt(digits_sum.toString().split('').reverse().join('')))?document.write(`${num} is a Magical number`):document.write(`${num} is not a Magical number`)
