//Buat 2 function di dalam satu file bernama config.mjs, function pertama returnnya adalah array dengan 5 elemen, tiap index array adalah function yang berkitan dengan nama function, function kedua returnnya adalah object dengan 5 property, tiap property adalah function yang berkaitan dengan nama property.
//Panggil kedua function di dalam satu file bernama main.mjs, lalu panggil semua function yang ada di dalam kedua function tersebut menggunakan masing-masing cara pemanggilan array atau objek.


export function getArrayFunctions() {
    return [
        function() {
            console.log("Function 1 dari Array");
        },
        function() {
            console.log("Function 2 dari Array");
        },
        function() {
            console.log("Function 3 dari Array");
        },
        function() {
            console.log("Function 4 dari Array");
        },
        function() {
            console.log("Function 5 dari Array");
        }
    ];
}

export function getObjectFunctions() {
    return {
        pertama: function() {
            console.log("Function pertama dari Object");
        },
        kedua: function() {
            console.log("Function kedua dari Object");
        },
        ketiga: function() {
            console.log("Function ketiga dari Object");
        },
        keempat: function() {
            console.log("Function keempat dari Object");
        },
        kelima: function() {
            console.log("Function kelima dari Object");
        }
    };
}
