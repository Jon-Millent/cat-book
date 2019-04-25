	function superSort(inputArray) {
		
		let sortArray = {};
		let outputArray = [];

		inputArray.forEach(val=>{
			let len = val.toString().length;
			sortArray[len] = sortArray[len] || [];
			sortArray[len].push(val);
		})

		for(let i in sortArray) {
			sortArray[i].sort((a,b)=>{
				return a - b;
			})

			outputArray.push(...sortArray[i])
		}


		console.log(sortArray, outputArray)
	}


	superSort([1, 2, 3, 4, 4566544, 546654546, 23121, 132231, 2121, 2121, 2121, 45, 56, 89, 78, 111, 222, 333, 5654546465 ,546456, 464565464554, 654645645, 6464546])
