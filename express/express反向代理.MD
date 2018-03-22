## express 反向代理二级目录 例如 `xxx.com/photo/2018/`
### 配置 `nginx`
```
location /photo/2018/ {
  proxy_pass http://127.0.0.1:3000/;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header Host $http_host;
  proxy_set_header X-NginX-Proxy true;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_max_temp_file_size 0;
  proxy_redirect off;
  proxy_read_timeout 240s;
}
```

### express 改动

`app.js`

```
  // 添加，实际加不加都行，不知道为什么
  app.enable('trust proxy');
```

### 代码改动

```html
  <a href="index" class="fl logo"> 路由前不要加 /
      <img src="icon/logo.png" alt=""> 静态资源前不要加 /
  </a>
```

```css
  background-image: url("../icon/zhaiyao.png"); 这要根据项目不同加 ../ 
```

### 坑
例如遇到 `xxx.com/photo/2018/list` 还好说，如果要这样 `xxx.com/photo/2018/list/001` 就直接找不对路径了，  
建议还是 `xxx.com/photo/2018/list?id=1001` 解决，推荐使用二级域名反向代理

## 使用二级域名反向代理
### `nginx` 配置
```
server {
    listen 80; 
    server_name api.xxx.com; 
    location / {
          proxy_pass http://127.0.0.1:3004;
          #root   html;
          #index  index.html index.htm;
      }

 }
```
这样配置的好处是代码不需要做任何修改 
