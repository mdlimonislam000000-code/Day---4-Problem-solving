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