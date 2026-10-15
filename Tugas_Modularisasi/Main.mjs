
import {
    getArrayFunctions,
    getObjectFunctions
} from "./Config.mjs";

// Memanggil function pertama
const arrayFunctions = getArrayFunctions();

console.log("=== FUNCTION DALAM ARRAY ===");

arrayFunctions.forEach(function(fn) {
    fn();
});

// Memanggil function kedua
const objectFunctions = getObjectFunctions();

console.log("=== FUNCTION DALAM OBJECT ===");

Object.values(objectFunctions).forEach(function(fn) {
    fn();
});
