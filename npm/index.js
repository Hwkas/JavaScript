import generate_name from "sillyname";
import superheroes from "superheroes";

var sillyname = generate_name();

console.log(`The silly name generated is ${sillyname}.`);

var super_hero_name = superheroes.random();

console.log(`I am ${super_hero_name}`);
