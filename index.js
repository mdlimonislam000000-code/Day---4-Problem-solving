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