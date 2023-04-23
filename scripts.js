const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

//destructing an object and array
const [first0, first1 ] = data.lists[0];
const [second0, second1 ] = data.lists[1];
const [third0, third1 ] = data.lists[2];

const result = []

const extractBiggest = () => {

	if (first1[first1.length - 1] > second1[second1.length - 1]) { //comparing the last elements of each array
		return first1.pop() //using pop method to remove and return last element of array
	}

	if (second1[second1.length - 1] > third1[third1.length - 1]) {
		return second1.pop()
	}
		return third1.pop()
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)