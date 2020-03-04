
// Mix two arry 
const ages = [13, 14, 16, 17];
const ages2 = [18, 12, 15, 16];
const ages3 = [19, 20, 18, 26];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

//es6 easy-peasy
const ages4 = [13, 14, 16, 17];
const ages5 = [18, 12, 15, 16];
const ages6 = [19, 20, 28, 23];
const allAges2 = [...ages4, ...ages5, 5, ...ages6 ];
console.log(allAges2);