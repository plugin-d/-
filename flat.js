Array.prototype.customFlat = function () {
	// if (!Array.isArray(this)) return;
	let arr = [];
	for (let i of this) {
		if (Array.isArray(i)) {
			// arr = [...arr, ...i.customFlat()];
			arr = arr.concat(i.customFlat());
		} else {
			arr.push(i);
		}
	}
	return arr;
};
let arr1 = [[1, 2, 3], 4, 5, [6, 7, 8, [9, 10, 10]]];
console.log(arr1.customFlat());
