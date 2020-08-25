export type UnaryFunc<T, U> = (x: T) => U;

export const compose = <T, U, V>(g: UnaryFunc<U, V>, f: UnaryFunc<T, U>): (h: T) => V => {
	return (x: T) => {
		return g(f(x));
	};
};