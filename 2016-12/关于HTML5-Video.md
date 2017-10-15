# 关于HTML5-Video
**现在的浏览器播放视频的趋势走向了HTML5，而flash则有了很多负面评论，多为内存占用多还有卡，所以HTML5成为了新宠儿。一时兴起便来研究一下HTML5视频。**<br />
<br />
**首先来看一下现在的视频网站是怎么用video标签的**<br />
![image](https://github.com/Jon-Millent/wen/blob/master/2016-12/img/2016-12/youtube.png)
```html
<video src="blob:https%3A//www.youtube.com/3a1ed3ec-fe8b-4919-91cd-3e9c72f68243"></video>
```
**他的video标签的src很奇怪，不是正常的url，个人认为这是防止视频真实地址被看到的缘故，至于这样的链接如何生成，下面来探讨一下。首先要用到这几个方法**<br />
* window.URL.createObjectURL //根据传入的参数创建一个指向该参数对象的URL
* window.URL.revokeObjectURL /释放指向该参数对象的URL

**尝试**

```javascript
	window.onload=function(){
		var xhr = new XMLHttpRequest();
		window.URL = window.URL || window.webkitURL;
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				var img = document.createElement("img");
			        img.onload = function(e) {
			          window.URL.revokeObjectURL(img.src); // 清除释放
			          document.body.appendChild(img);
			        };
			        img.src = window.URL.createObjectURL(xhr.response);
				 
			}
		}
		xhr.open('get','/static/123.png',true);
		xhr.responseType = "blob";
		xhr.send();
	}
```
**我们也得到了一个类似的地址**
```html
<img src="blob:http%3A//localhost%3A8088/bf10f761-426d-4f77-83a3-fbe80f2a9787">
```

**这个问题解决以后，我又发现在播放视频的时候，通过移动鼠标可以实现知道之后每段的大概图像类似于这样**

![image](https://github.com/Jon-Millent/wen/blob/master/2016-12/img/2016-12/tio1.png?raw=true)

**我想这个功能大概是HTML5是做不到的，后来我发现他们是用后台生成好的图片，类似于雪碧图的效果**

![image](https://github.com/Jon-Millent/wen/blob/master/2016-12/img/2016-12/M1.jpg?raw=true)


**未完待续...**
