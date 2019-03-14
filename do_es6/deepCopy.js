function deepCopy(objs) {
	let reBack = null

	let type = Object.prototype.toString.call(objs)

	if(type === '[object Array]') {
		reBack = []
	} else if(type === '[object Object]') {
		reBack = {}
	} else {
		reBack = objs
	}

	for(let i in objs) {
		if(type === '[object Array]') {
			reBack[i] = deepCopy(objs[i])
		} else if(type === '[object Object]') {
			reBack[i] = deepCopy(objs[i])
		} else {
			reBack[i] = objs[i]
		}
	}

	return reBack

}


let myObj = {
	name: {
		a: 1,
		b: 2
	},
	says(){
		console.log('aaaa')
	},
	arr: [1, 2, 3]
}

let others = deepCopy(myObj)
console.log(others)

others.arr.push(123456)

console.log(myObj)
console.log(others)
