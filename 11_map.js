



const mapOfNumber =  new Map();
mapOfNumber.set("one", 1);
mapOfNumber.set("two", 2);
mapOfNumber.set("three", 3);
mapOfNumber.set("one", 1);
// mapOfNumber.set("four", 2);
// mapOfNumber.set("two", 22);
console.log(mapOfNumber.size);
console.table(mapOfNumber);
console.log(mapOfNumber.get('two'));
console.log(mapOfNumber.get('one'));

mapOfNumber.delete('two')
console.log("After Delete",mapOfNumber.size);

console.log(mapOfNumber.has("two"));



const vlauesOfMap = mapOfNumber.values();
console.log(vlauesOfMap);

console.log("traversing Map");
const keyOfMap = mapOfNumber.keys();
// console.log(keyOfMap);

for (const key of keyOfMap) {
    console.log(key,mapOfNumber.get(key));
}

