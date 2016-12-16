# 关于HTML5-Video
**现在的浏览器播放视频的趋势走向了HTML5，而flash则有了很多负面评论，多为内存占用多还有卡，所以HTML5成为了新宠儿。一时兴起便来研究一下HTML5视频。**<br />
**首先来看一下现在的视频网站是怎么用video标签的**<br />
![image](https://github.com/Jon-Millent/wen/blob/master/2016-12/img/2016-12/youtube.png)
```html
<video tabindex="-1" class="video-stream html5-main-video" style="width: 640px; height: 360px; left: 0px; top: 0px;" src="blob:https%3A//www.youtube.com/3a1ed3ec-fe8b-4919-91cd-3e9c72f68243"></video>
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
