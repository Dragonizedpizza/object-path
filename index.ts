export function get(t: any, x: string | (string | number)[]) {
	let current;

	for (const k of Array.isArray(x) ? x : x.split("."))
		if (current) {
			if (Array.isArray(current)) current = current[<number>k];
			else current = current[k];
		} else {
			const value = t[k];

			if (value) current = value;
			else break;
		}

	return current;
}

export function set(t: any, x: string | (string | number)[], v: any) {
	let current,
		keys = Array.isArray(x) ? x : x.split(".");

	for (let i = 0; i < keys.length; i++) {
		const k = keys[i];

		if (current) {
			if (keys.length - 1 === i) {
				current[k] = v;
			} else if (Array.isArray(current)) current = current[<number>k];
			else current = current[k];
		} else {
			const value = t[k];

			if (value) current = value;
			else break;
		}
	}
}