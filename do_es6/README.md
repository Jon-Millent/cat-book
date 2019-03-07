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
	showName(a){
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
	showName(a){
		console.log(this, a)
	}
}

apple.showName.myCall(window, [1, 2, 3, 4])
```


### `deepCopy`

```js
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
```
