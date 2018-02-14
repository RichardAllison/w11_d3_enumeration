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

	sum: function (arr) {
    return arr.reduce(function (accumulator, number) {
      return accumulator + number;
    }, 0);
	},

	removeAndClone: function (arr, valueToRemove) {
    return arr.filter(function (number) {
      return (number !== valueToRemove);
    });
	},

	findIndexesOf: function (arr, itemToFind) {
    const newArray = [];
    arr.forEach(function (item, index) {
      if (item === itemToFind) {
        newArray.push(index);
      }
    });
    return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
    return arr.filter(function (number) {
      return number % 2 === 0;
    }).map(function (number) {
      return number ** 2;
    }).reduce(function (accumulator, number) {
      return accumulator + number;
    });
	}

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
