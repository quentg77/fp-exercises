import { compose } from "./compose";
import { deepArraySum } from "./deepArrayInfos";
import { sub } from "./sub";

const arr = [1000, 15, 4, 683, 4, 6, 4, 6, 49, 8, 7, 1];

const subAndSum = compose(deepArraySum, sub);

console.log("subAndSum", subAndSum(arr));