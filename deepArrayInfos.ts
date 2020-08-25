export type deepArray = number | deepArray[];

export const deepArraySum = (input: deepArray): number => {
	if (typeof input === "number") {
		return input;
	} else {
		let sum = 0;

		input.map((item) => {
			sum += deepArraySum(item);
		});

		return sum;
	}
};

export const deepArrayDepth = (input: deepArray, actualDepth: number = 1): number => {
	if (typeof input === "number") {
		return 0;
	} else {
		let depth = actualDepth;

		input.map((item) => {
			const newDepth = deepArrayDepth(item, actualDepth + 1);
			depth = newDepth > depth ? newDepth : depth;
		});

		return depth;
	}
}