const Benchpress = require("@mariocasciaro/benchpress"),
	benchmark = new Benchpress();

let testObj = {
		level1_a: {
			level2_a: {
				level3_a: {
					level4_a: {},
				},
			},
		},
	},
	testObj2;

module.exports = function mark(name, lib) {
	benchmark
		.add(name + " get existing", {
			iterations: 100000,
			fn: function () {
				lib.get(testObj, ["level1_a", "level2_a", "level3_a", "level4_a"]);
			},
		})
		.add(name + " get non-existing", {
			iterations: 100000,
			fn: function () {
				lib.get(testObj, ["level5_a"]);
			},
		})
		.add(name + " set non existing", {
			iterations: 100000,
			fn: function () {
				lib.set(testObj2, ["level1_a", "level2_b", "level3_b", "level4_b", "level5_b"], "val");
			},
			beforeEach: function () {
				testObj2 = {};
			},
		})
		.add(name + " set existing", {
			iterations: 100000,
			fn: function () {
				lib.set(testObj, ["level1_a", "level2_a", "level3_a", "level4_a", "level5_b"], "val");
			},
		})
		.run();
};
