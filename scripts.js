const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

console.log(first)
console.log(second)
console.log(third)
// const { first = 1 } = data.lists.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}

const result = [first, second, third]

console.log(result)

const extractBiggest = () => {
	if (first[first.length - 1] > second[second.length - 1]) {
		return first[first.length - 1]
	}
    first.pop();
	if (third[third.length - 1] < second[second.length - 1]) {
		return second[second.length - 1]
	}
	second.pop()
	return third[third.length -1]
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