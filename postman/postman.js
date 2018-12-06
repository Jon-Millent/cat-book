
const baseConfig = require('../config')
const axios = require('axios')

class PostMan {

  constructor() {
    this.baseUrl = baseConfig.baseUrl
    this.axios = axios
    this.status = {
      success: 200,
      error: 500
    }
  }

  sender(type, url, data){
    return new Promise(resolve => {

      let mixinData = {
        token: baseConfig.token
      }

      mixinData = Object.assign(mixinData, data)

      let requestConfig = {
        method: type,
        url:this.baseUrl + url,
        header:{
          /* 需要更改/添加的请求头 */
        }
      }

      if(type === 'GET' || type === 'get') {
        requestConfig.params = mixinData
      } else {
        requestConfig.data = mixinData
      }

      axios(requestConfig).then((res)=>{
        resolve({
          code: this.status.success,
          data: res,
          err: null
        })
      }).catch(err=>{
        resolve({
          code: this.status.error,
          data: {},
          err
        })
      })

    })
  }

  get(api, params){
    return this.sender('GET', api, params)
  }

  post(api, params){
    return this.sender('POST', api, params)
  }

  isSuccess(code) {
    return !!{0: true, 200: true}[code]
  }



  // 例子
  async some(data){
    return await this.get('/user/login', data)
  }


}
