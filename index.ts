/**
 * Function to access deep properties of an object.
 * @template {*} T The function return
 * @param {*} obj The object
 * @param {String | Array<String | Number>} keys The key or keys to get
 * @returns {T extends void ? * : T}
 */

export function get<T = void>(obj: any, keys: string | (string | number)[]): T extends void ? any : T {
	let current; // current key

	for (const key of Array.isArray(keys) ? keys : keys.split("."))
		if (current) current = current[key];
		else {
			if (obj[key]) current = obj[key];
			else return undefined as any;
		}

	return current as T extends void ? any : T;
}

/**
 * Function to set deep properties of an object.
 * @param {*} t The object
 * @param {String | Array<String | Number>} k The key or keys to set
 * @param {*} v The value to set
 * @returns {*}
 */

export function set(obj: any, keys: string | (string | number)[], value: any): any {
	let current; // current object
	keys = Array.isArray(keys) ? keys : keys.split(".");

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];

		if (current) {
			if (keys.length - 1 === i) return (current[key] = <never>value);
			else if (Array.isArray(current)) current = current[<number>key];
			else current = current[key];
		} else {
			if (keys.length - 1 === i) return (obj[key] = value);

			current = obj[key] ??= {};
		}
	}
}
