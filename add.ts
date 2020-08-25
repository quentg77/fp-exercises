export const add = (list: number[], ...args: number[]): number[] => {
	return [...list, ...args];
}