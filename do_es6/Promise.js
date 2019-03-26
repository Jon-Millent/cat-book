class myPromise {
	constructor(fn){
		this.status = 'pendding'
		this.mainFn = fn;
		this.thenFn = null;
		this.catchFn = null;

		this.mainWork()
	}

	resolve(result){
		this.status = 'resolved'

		this.thenFn(result)
	}

	reject(err){
		this.status = 'rejected'

		this.catchFn(err)
	}

	mainWork(){
		let that = this
		setTimeout(()=>{
			this.mainFn(function (result) {
				that.resolve(result)
			}, function (err) {
				that.reject(err)
			})
		})
	}

	then(fn){
		this.thenFn = fn
		return this
	}

	catch(fn){
		this.catchFn = fn
	}




}


let work = new myPromise(function (resolve, reject) {
	setTimeout(()=>{
		reject(100)
	}, 1000)
}).then(function (result) {
	console.log( result, 'success' )
}).catch(function (err) {
	console.log(err, 'error')
})
