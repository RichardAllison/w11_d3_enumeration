const arrayTasks = {

	concat: function (arr1, arr2) {
    const newArray = [];
    arr1.forEach(function (item) {
      newArray.push(item);
    })
    arr2.forEach(function (item) {
      newArray.push(item);
    })
    return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
	},

	square: function (arr) {
    return arr.map(function (value) {
      return value ** 2;
    });
	},

	sum: function (arr) {
    return arr.reduce(function (accumulator, value) {
      return accumulator + value;
    }, 0);
	},

	removeAndClone: function (arr, valueToRemove) {
    return arr.filter(function (value) {
      return (value !== valueToRemove);
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
    return arr.filter(function (value) {
      return value % 2 === 0;
    }).map(function (value) {
      return value ** 2;
    }).reduce(function (accumulator, value) {
      return accumulator + value;
    });
	},

	// ----------- EXTENSION ------------

	findDuplicates: function (arr) {
    newArray = [];
    arr.forEach(function (itemToCheck) {
      const filtered = arr.filter(function (item) {
        return item === itemToCheck;
      })
      if (filtered.length > 1) {
        if (newArray.indexOf(itemToCheck) === -1) {
          newArray.push(itemToCheck);
        }
      }
    });
    return newArray;
	}

}

module.exports = arrayTasks
