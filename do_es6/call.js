Function.prototype.myCall = function (parent, arrays) {
	let obj = parent
	parent.doint = this
	parent.doint(arrays)
	delete parent.doint
}

// test
let apple = {
	showName(a){
		console.log(this, a)
	}
}

apple.showName.myCall(window, [1, 2, 3, 4])
