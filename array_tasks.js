const arrayTasks = {

	concat: function (arr1, arr2) {
    const newArray = [];
    arr1.forEach(function (element) {
      newArray.push(element);
    })
    arr2.forEach(function (element) {
      newArray.push(element);
    })
    return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
	},

	square: function (arr) {
    return arr.map(function (number) {
      return number ** 2;
    });
	},

	// sum: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
