function quicklySort(arr) {
		
		if(arr.length < 2) {
			return arr
		}

		let centerTarget = arr.splice(Math.floor(arr.length / 2), 1)[0]


		let left = []
		let right = []
		let sameValue = [centerTarget]


		arr.forEach(val=>{
			if(val === centerTarget) {
				sameValue.push(val)
			} else {
				val > centerTarget ? left.push(val) : right.push(val)
			}
		})


		return quicklySort(left).concat(sameValue).concat(quicklySort(right))


	}
