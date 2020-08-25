import { deepArray, deepArrayDepth, deepArrayMax, deepArrayMin, deepArraySum } from "./deepArrayInfos";

const list: deepArray = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

console.log("sum", deepArraySum(list));
console.log("depth", deepArrayDepth(list));
console.log("max", deepArrayMax(list));
console.log("min", deepArrayMin(list));
