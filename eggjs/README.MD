# install

* `npm i egg-init -g`
* `egg-init egg-example --type=simple`
* `cd egg-example`
* `npm i`


# rule
### install
* `npm i egg-validate --save`
* append config  

  `/config/plugin.js`
  ```js
    exports.validate = {
      enable: true,
      package: 'egg-validate',
    };
  ```
### use

`/app/controller/home.js`
```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  
    const { ctx, service } = this;
  
    console.log(ctx.query)
    
    ctx.validate({
      id: {
        type: 'string'
      },
    }, ctx.query);
  
    ctx.body = 'success'
    
  }
}

module.exports = HomeController;

```

# view

### install
* `npm i egg-view-art --save`
* append config  

  `/config/plugin.js`

  ```js
  exports.art = {
    enable: true,
    package: 'egg-view-art',
  };
  ```

  `/config/config.default.js` 

  ```js
    config.view = {
      root: [
        path.join(appInfo.baseDir, 'app/view'),
      ].join(','),
      mapping: {
        '.art': 'art',
      },
    };

    exports.art = {
    }
  ```

### use

```js
  await ctx.render('index.art');
```


```csrf
  config.security = {
    /**
     * 禁用methodnoallow，对OPTIONS放行
     */
    methodnoallow: {
      enable: false
    },
    csrf: {
      enable: false,
      headerName: 'x-csrf-token',
      ignoreJSON: false,
    }
  };
```
