import { set, get } from "./index.js";

var obj = {
	a: {
		b: "d",
		c: ["e", "f"],
		"\u1200": "unicode key",
		"dot.dot": "key",
	},
};

console.log("Accesing an array -", get(obj, ["a", "c", "1"]));
console.log("Normally testing it -", get(obj, "a.b"));
console.log("Testing it with an array -", get(obj, ["a", "b"]));
console.log("Using a unicode key -", get(obj, "a.\u1200"));
console.log("bro idk -", get(obj, ["a", "dot.dot"]));

set(obj, "a.c.1", "sussy!");

console.log(obj);
