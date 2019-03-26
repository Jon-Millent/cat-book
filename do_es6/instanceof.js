function myInstanceOf(left, right) {
	let prototype = left.__proto__
	while(prototype) {
		if(prototype === right.prototype) {
			return true
		} else {
			prototype = prototype.__proto__
		}
	}
	return false
}

// test

let a = {}
let b = ''
console.log(myInstanceOf(a, Object))
console.log(myInstanceOf(b, String))
