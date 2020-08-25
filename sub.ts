export const sub = <T>(list: Array<T>): Array<T> => {
	const [,...res] = list;
	return res;
}