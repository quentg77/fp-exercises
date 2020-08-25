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

export const deepArrayDepth = (
	input: deepArray,
	actualDepth: number = 1
): number => {
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
};

export const deepArrayMax = (
	input: deepArray,
	currentMaxValue: number = Number.MIN_SAFE_INTEGER
): number => {
	if (typeof input === "number") {
		return currentMaxValue >= input ? currentMaxValue : input;
	} else {
		let max = currentMaxValue;

		input.map((item) => {
			max = deepArrayMax(item, max);
		});

		return max;
	}
};

export const deepArrayMin = (
	input: deepArray,
	currentMinValue: number = Number.MAX_SAFE_INTEGER
): number => {
	if (typeof input === "number") {
		return currentMinValue <= input ? currentMinValue : input;
	} else {
		let min = currentMinValue;

		input.map((item) => {
			min = deepArrayMin(item, min);
		});

		return min;
	}
};
