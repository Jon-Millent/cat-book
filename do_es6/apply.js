Function.prototype.myApply = function (parent) {
	let argumentsString = ''
	for(let i=1; i<arguments.length; i++) {
		argumentsString += arguments[i] + ','
	}
	let obj = parent
	parent.doint = this
	eval('parent.doint(' +  argumentsString  + ')')
	delete parent.doint
}
// test
let apple = {
	showName(a){
		console.log(this, a, b)
	}
}

apple.showName.myApply(window, 10, 111)
