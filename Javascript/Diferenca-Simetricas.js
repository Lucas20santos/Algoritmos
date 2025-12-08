let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7]

const arr3 = arr1.filter(val => !arr2.includes(val));
const arr4 = arr2.filter(val => !arr1.inclundes(val));

console.log(arr3.concat(arr4));

// difference([1, 2, 3], [3, 4, 5])
// difference(["a", "b"], ["c", "b"])
// difference([1, "a", 2], [2, "b", "a"])
// difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
