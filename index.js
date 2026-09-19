// Problem 16
const countProperties = (obj) =>{
    let count = 0 ;
    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            count++;
        }
    }
    return count ;
}
console.log('problem - 16 :',countProperties({a: 1, b: 2, c: 3 , d : 5}));

// Problem - 17 

const mergeObjects = (obj1, obj2) => {
    const merged = {};

    for (let key in obj1) {
        if (Object.hasOwn(obj1, key)) {
            merged[key] = obj1[key];
        }
    }
    
    for (let key in obj2) {
        if (Object.hasOwn(obj2, key)) {
            merged[key] = obj2[key];
        }
    }
    
    return merged;
};

console.log('Problem - 17 :',mergeObjects({a: 1, x: 10}, {b: 2, x: 20}));

// Problem 18 

const fizzBuzz = (n) =>{
    const result = [] ;
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result.join(', ');
}
console.log('Problem - 18 :',fizzBuzz(15));

// Problem 19 

const invertObject = (obj) =>{
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
}
console.log('Peoblem - 19 :',invertObject({a: 1, b: 2}));