# 关于微信分享

#### 最近遇到一个问题，微信分享带hash值的单页面应用，hash值被过滤掉了。

#### 例如
`www.xxx.com/#/product/shop?id=100`
#### 会被过滤成
`www.xxx.com?from=timeline`

#### 灵机一动想到一个注意,步骤如下

* 处理分享链接


  ```javascript
  
    var base = new Base64();
    var encrypt_data = base.encode(location.href);
    var shareHref = location.origin+location.pathname + 'jump.html?hash=' + encrypt_data;
    
    wx.onMenuShareTimeline({
        title: $scope.product.name+' (来自xxx的分享)', // 分享标题
        link: shareHref, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: $scope.product.photos[0].large, // 分享图标
        success: function () {

        },
        cancel: function () {

        }
    });
  ```
* 项目目录新建一个 `jump.html` 的中转文件,然后转接


  ```javascript

    var hash = getReauest().hash;
    var decrypt_data = new Base64().decode(hash)
    window.location.replace(decrypt_data);

  ```

#### 然后就成功了，以后还会继续更新我的小博客的 create time 2017年10月15日21:56:21
