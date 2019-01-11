# windows cmd 设置代理

### 临时代理
```cmd
set https_proxy=http://127.0.0.1:1080  //端口指向小飞机端口
```

### 永久代理
和ie代理同步
```cmd
netsh winhttp import proxy source=ie
```
