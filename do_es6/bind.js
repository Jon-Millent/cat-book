	Function.prototype.myBind = function () {
		let that = arguments[0];
		let others = [];


		for(let i=0; i < arguments.length; i++) {
			i > 0 && others.push(arguments[i]);
		}

		let doWork = this

		return function () {
			doWork.apply(that, others);
		}
	}



	function google(a) {
		console.log(this, 'this');
		console.log(a, 'asaa');
	}

	let newGoogle = google.myBind([1, 2, 3, 4], 10, 11, 12, 13)

	newGoogle();
