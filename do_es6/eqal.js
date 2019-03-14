function eqal(obja, objb, same) {
		// 递归对象

		let type = Object.prototype.toString.call(obja)
		let sameObj = same || {
			isSame: true
		}
		if(typeof obja !== 'object') {
			sameObj.isSame = (obja === objb)
		} else {
			try {
				for(let i in obja) {
					if(type === "[object Array]" || type === "[object Object]") {
						eqal(obja[i], objb[i], sameObj)
					} else {
						sameObj.isSame = (obja[i] === objb[i])
						console.log(obja[i], objb[i])
					}
				}
			} catch(e) {
				console.log(e)
				sameObj.isSame = false
			}	
		}

		

		return sameObj.isSame

	}
