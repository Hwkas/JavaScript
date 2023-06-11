//Q1. Area of circle
var r = Number(prompt(`Enter the radius of circle: `))
// console.log(`Area of Circle is ${r*3.14*r}`)
document.write(`Area of Circle is ${r*3.14*r}<br>`)

//Q2. Area of Rectangle
var l = Number(prompt(`Enter the lenght of Rectangle: `))
var b = Number(prompt(`Enter the breadth of Rectangle: `))
// console.log(`Area of Rectangle is ${2*3}`)
document.write(`Area of Rectangle is ${2*3}<br>`)

//Q3. Area of cuboid
var l = Number(prompt(`Enter the lenght of Cuboid: `))
var b = Number(prompt(`Enter the breadth of Cuboid: `))
var h = Number(prompt(`Enter the height of Cuboid: `))
// console.log(`Area of Cuboid is ${2*(l*b+b*h+l*h)}`)
document.write(`Area of Cuboid is ${2*(l*b+b*h+l*h)}<br>`)

//Q4. Area of right angles triangle
var b = Number(prompt(`Enter the base lenght of Right angled triangle: `))
var h = Number(prompt(`Enter the height of the Right angled triangle: `))
// console.log(`Area of Right Angles Triangle ${(b*h)*2}`)
document.write(`Area of Right Angles Triangle ${(b*h)*2}<br>`)

//Q5. Area of square
var a = Number(prompt(`Enter the measurement of size of Square: `))
// console.log(`Area of Square ${a*a}`)
document.write(`Area of Square ${a*a}<br>`)

//Q6. Swap two variables
var a = Number(prompt(`Enter the value of a: `))
var b = Number(prompt(`Enter the value of b: `))
// console.log(`Value of a = ${a} & b = ${b} before swap`)
document.write(`Value of a = ${a} & b = ${b} before swap<br>`)
var swap = 0

swap = a
a = b
b = swap
// console.log(`After swap value of a = ${a} & b = ${b}`)
document.write(`After swap value of a = ${a} & b = ${b}<br>`)

//Q7. convert temperature form Fahrenheit to Celcius.
var f = Number(prompt(`Enter the measurement of temperatue of in Fahrenheit: `))
// console.log(`Temperature in celcius = ${((f-32)*5)/9}`)
document.write(`Temperature in celcius = ${((f-32)*5)/9}<br>`)

//Q8. convert temperature form Celcius to Fahrenheit.
var c = Number(prompt(`Enter the measurement of temperature in Celcius: `))
// console.log(`Temperature in Fahrenheit = ${((c*9/5)+32)}`)
document.write(`Temperature in Fahrenheit = ${((c*9/5)+32)}<br>`)

// Q9. check if a number is perfect square
var num = Number(prompt(`Enter a number to check if it a perfect square or not: `))
num**0.5 == parseInt(num**0.5)?document.write(`${num} is a perfect square`):document.write(`${num} is not a perfect sqaure`)