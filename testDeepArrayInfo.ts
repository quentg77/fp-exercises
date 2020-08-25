import { deepArray, deepArrayDepth, deepArraySum } from "./deepArrayInfos";

const list: deepArray = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

console.log(deepArraySum(list));
console.log(deepArrayDepth(list));
