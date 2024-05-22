"use strict";
const person = [
    ["John", 30],
    ["Jane", 25],
    ["Jim", 20],
];
person.forEach(([name, age]) => {
    console.log(`${name} is ${age} years old`);
});
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
const color = Color.Green;
console.log(color); // 2
