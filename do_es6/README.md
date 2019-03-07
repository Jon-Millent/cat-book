# 实现js各种方法

### `apply`

```js
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
	showName(a, b){
		console.log(this, a, b)
	}
}

apple.showName.myApply(window, 10, 111)

```

### `call`
```js
Function.prototype.myCall = function (parent, arrays) {
	let obj = parent
	parent.doint = this
	parent.doint(arrays)
	delete parent.doint
}

// test
let apple = {
	showName(a, b){
		console.log(this, a, b)
	}
}

apple.showName.myCall(window, [1, 2, 3, 4])
```
